---
sidebar_position: 2
---
# Data export and statistics

## Exporting ChoCo as a JAMS dataset

To export **ChoCo** from the `partition` branch (our factory of ChoCo collections), simply run the command below with the number of threads (`n_workers`) you can afford for this.

```
python create.py ../choco-jams \
    --jams_version converted --exclude ireal-pro:forum --n_workers 4
```

To export **ChoCo XT** from the `partition` branch, we just need to avoid excluding some sub-collections. You can use the command below.

```
python create.py ../choco-jams \
    --jams_version converted --n_workers 4
```

### Create your own ChoCo dataset

If you want a custom subset of ChoCo, based on specific partitions to include/exclude or on certain expected metadata, you just need to play around with the `choco/create.py` script (see below for documentation).

```
Dataset creation scripts for ChoCo.

positional arguments:
  out_dir               Directory where data will be exported.

optional arguments:
  -h, --help            show this help message and exit
  --jams_version {original,converted}
                        Type of JAMS files to consider from ChoCo.
  --input_meta INPUT_META
                        Path to the CSV file with the desired metadata.
  --include INCLUDE [INCLUDE ...]
                        Name of partitions to include in the dataset.
  --exclude EXCLUDE [EXCLUDE ...]
                        Name of partitions to exclude from the dataset.
  --n_workers N_WORKERS
                        Number of workers for parallel computation.
  --log_dir LOG_DIR     Directory where log files will be generated.
  --debug               Whether to print logging info messages.
  --resume              Whether to resume the transformation process.
```

Example on a custom subset of ChoCo that we are using in `musilar` to trace musical influence.
```
python create.py ../../musilar/data/influence/choco-beatles --jams_version original \
    --exclude chordify robbie-williams uspop2002 rwc-pop biab-internet-corpus \
    jazz-corpus wikifonia --n_workers 4
```

Example of a custom subset including audio annotations only.

```
python create.py ../../musilar/data/genre/choco-audio --jams_version original \
    --include isophonics schubert-winterreise billboard chordify \
    robbie-williams uspop2002 rwc-pop --n_workers 4
```

## Extracting statistics from a ChoCo dataset

The computation of descriptive statistics of a ChoCo dataset is divided in 2 steps: (i) extraction of descriptors from every JAMS file in the given collection; (ii) aggregation of statistics per namespace (the type of annotation, such as `chord`, `key_mode`, etc.) and JAMS type (audio or score). The module responsible for this is `jams_stats.py`, which provides a simple CLI for both these steps (see below).

```
Simple extractor of chord stats from JAMS files.

positional arguments:
  {extract,aggregate,plot}
                        Either extract, aggregate, plot.
  dataset               Directory where JAMS files will be read, or path to the JAMS stats previously generated

optional arguments:
  -h, --help            show this help message and exit
  --namespaces NAMESPACES
                        A list of namespaces to consider for aggregation; if not provided, all namespaces will be used.
  --out_dir OUT_DIR     Directory where statistics will be saved.
  --n_workers N_WORKERS
                        Number of workers for stats computation.
  --compression COMPRESSION
                        Compression rate for saving the stats file.
```

Assuming that you have downloaded, or exported, a ChoCo dataset in `~/choco-jams`, then you will have to run the following commands.
```
python jams_stats.py extract ~/choco-jams/jams --out_dir ~/choco-jams/ --n_workers 4
python jams_stats.py aggregate ~/choco-jams/jams_stats.joblib
```