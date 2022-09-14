# Examples of JAMS files

## Audio JAMS

```json
{
  "annotations": [
    {
      "annotation_metadata": {
        "curator": {
          "name": "Tor Curat",
          "email": "torcurat@gmail.com"
        },
        "annotator": {
          "name": "Paul Holland"
        },
        "version": 1,
        "corpus": "isophonics",
        "annotation_tools": "sonicvisualiser",
        "annotation_rules": null,
        "validation": null,
        "data_source": "expert_human"
      },
      "namespace": "chord",
      "data": [
        {
          "time": 0.0,
          "duration": 64.0,
          "value": "C:min",
          "confidence": 0.9
        },
        {
          "time": 64.0,
          "duration": 128.0,
          "value": "G:min",
          "confidence": 1
        }
      ],
      "sandbox": {},
      "time": 0,
      "duration": 128
    },
    {
      "annotation_metadata": {
        "curator": {
          "name": "Tor Curat",
          "email": "torcurat@gmail.com"
        },
        "annotator": {
          "name": "Paul Holland"
        },
        "version": 1,
        "corpus": "isophonics",
        "annotation_tools": "sonicvisualiser",
        "annotation_rules": null,
        "validation": null,
        "data_source": "expert_human"
      },
      "namespace": "key_mode",
      "data": [
        {
          "time": 0.0,
          "duration": 128.0,
          "value": "A",
          "confidence": 1
        }
      ],
      "sandbox": {},
      "time": 0,
      "duration": 128
    }
  ],
  "file_metadata": {
    "title": "This is a title",
    "artist": null,
    "release": "Blue release",
    "duration": 130,
    "identifiers": {
      "music-brainz": "999999999",
      "discogs": "94949494949",
      "perlam": "8s8d8f8f8f8f"
    },
    "jams_version": "0.3.4"
  },
  "sandbox": {
    "type": "audio",
    "composers": [
      "John Lennon",
      "Giuseppe Verdi"
    ],
    "performers": [
      "Richard Benson",
      "Pino Scotto"
    ]
  }
}
```


### Recreate this audio JAMS

```python
sample = jams.JAMS()

sample.file_metadata.title = "This is a title"
sample.file_metadata.release = "Blue release"
sample.file_metadata.duration = 130. # in seconds
sample.file_metadata.artist = None # use this if you do not know

sample.file_metadata.identifiers = {
    "music-brainz": "999999999",
    "discogs": "94949494949",
    "wikidata": "8s8d8f8f8f8f"
}

sample.sandbox = {
    "type": "audio",
    "composers": [
        "John Lennon",
        "Giuseppe Verdi"
    ],
    "performers": [
        "Richard Benson",
        "Pino Scotto"
    ]
}

# Creating a chord annotation
annotation = jams.Annotation("chord")
annotation.time = 0
annotation.duration = 128

annotation.annotation_metadata.annotator.name = "Paul Holland"

annotation.annotation_metadata.data_source = "program"
annotation.annotation_metadata.data_source = "crowdsource"
annotation.annotation_metadata.data_source = "expert_human"


annotation.annotation_metadata.corpus = "isophonics"
annotation.annotation_metadata.version = 1
annotation.annotation_metadata.curator.name = "Tor Curat"
annotation.annotation_metadata.curator.email = "torcurat@gmail.com"

annotation.annotation_metadata.annotation_tools = "sonicvisualiser"
annotation.annotation_metadata.annotation_rules = None
annotation.annotation_metadata.validation = None

annotation.append(
    time=0,
    duration=64,
    value="C:min",
    confidence=0.9
)

annotation.append(
    time=64,
    duration=128,
    value="G:min",
    confidence=1
)

# Creating a key annotation
key_annotation = jams.Annotation("key_mode",
    annotation_metadata=annotation.annotation_metadata)
key_annotation.time = 0
key_annotation.duration = 128

key_annotation.append(
    time=0,
    duration=128,
    value="A",
    confidence=1
)

sample.annotations.append(annotation)
sample.annotations.append(key_annotation)
```

## Score JAMS

```json
{
  "annotations": [
    {
      "annotation_metadata": {
        "curator": {
          "name": "Simba Bal",
          "email": "simba.bal@gmail.com"
        },
        "annotator": {
          "name": "Anne Otator"
        },
        "version": 1,
        "corpus": "mozartium",
        "annotation_tools": "Verovio",
        "annotation_rules": null,
        "validation": null,
        "data_source": "expert_human"
      },
      "namespace": "chord",
      "data": [
        {
          "time": 1.1,
          "duration": 2.0,
          "value": "E",
          "confidence": 1
        },
        {
          "time": 1.3,
          "duration": 2.0,
          "value": "A:min",
          "confidence": 1
        }
      ],
      "sandbox": {},
      "time": 1,
      "duration": 45
    },
    {
      "annotation_metadata": {
        "curator": {
          "name": "Simba Bal",
          "email": "simba.bal@gmail.com"
        },
        "annotator": {
          "name": "Anne Otator"
        },
        "version": 1,
        "corpus": "mazartium",
        "annotation_tools": "Verovio",
        "annotation_rules": null,
        "validation": null,
        "data_source": "expert_human"
      },
      "namespace": "key_mode",
      "data": [
        {
          "time": 1.1,
          "duration": 45.0,
          "value": "A",
          "confidence": 1
        }
      ],
      "sandbox": {},
      "time": 1,
      "duration": 45
    }
  ],
  "file_metadata": {
    "title": "Michelle",
    "artist": "",
    "release": "",
    "duration": 45,
    "identifiers": {
      "music-brainz": "work/0d491b94-18d9-3c5a-9163-b3dfa4483fdb"
    },
    "jams_version": "0.3.4"
  },
  "sandbox": {
    "type": "score",
    "expanded": "true",
    "composers": [
      "John Lennon",
      "Paul McCartney"
    ]
  }
}
```

## Recreate this score JAMS

```python
jams_score = jams.JAMS()

jams_score.file_metadata.title = "Michelle"
# jams_score.file_metadata.release = None
jams_score.file_metadata.duration = 45  # no. of measures


jams_score.file_metadata.identifiers = {
    "music-brainz": "work/0d491b94-18d9-3c5a-9163-b3dfa4483fdb",
}

jams_score.sandbox = {
    "type": "score",
    "expanded": "true",
    "composers": [
        "John Lennon",
        "Paul McCartney"
    ],
}

chord_annotation = jams.Annotation("chord")
chord_annotation.time = 1  # from measure 1
chord_annotation.duration = 45

chord_annotation.annotation_metadata.annotator.name = "Anne Otator"
chord_annotation.annotation_metadata.data_source = "expert_human"
chord_annotation.annotation_metadata.corpus = "when-in-rome"

chord_annotation.annotation_metadata.version = 1
chord_annotation.annotation_metadata.curator.name = "Simba Bal"
chord_annotation.annotation_metadata.curator.email = "simba.bal@gmail.com"

chord_annotation.annotation_metadata.annotation_tools = "Verovio"
chord_annotation.annotation_metadata.annotation_rules = None
chord_annotation.annotation_metadata.validation = None

chord_annotation.append(
    time=1.1,
    duration=2,
    value="E",
    confidence=1
)

chord_annotation.append(
    time=1.3,
    duration=2,
    value="A:min",
    confidence=1
)

key_annotation = jams.Annotation("key_mode",
    annotation_metadata=chord_annotation.annotation_metadata)
key_annotation.time = 1
key_annotation.duration = 45

key_annotation.append(
    time=1.1,
    duration=45,
    value="A",
    confidence=1
)

jams_score.annotations.append(chord_annotation)
jams_score.annotations.append(key_annotation)
```