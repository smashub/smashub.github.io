---
sidebar_position: 5
---
# Extra notes on partitions

## Audio partitions

### Isophonics
> License: not specified

- Authors are essentially performers, although they may be composers as well.
- Information is available concerning: release name, and track number.
- The annotator is mostly Matthias Mauch.
- Additional annotations include: structure, beats.

---

### JAAH
> License:  Creative Commons Attribution Non Commercial Share Alike 4.0 International

- Authors are essentially performers, although they may be composers as well.
- Extra information about metre, tuning.
- Annotations available also for sections, and beats (onsets).
- MusicBrainz ID of tracks is available.
- Additional annotations include: structure.

---

### Schubert-Winterreise (multimodal)
> License: [Creative Commons Attribution 3.0 Unported](https://creativecommons.org/licenses/by/3.0/legalcode)

- Audio subset: duration (in seconds), performers (2), composer (Schubert).
- Audio subset: needs distinction because MusicBrainz ID is of the release.
- Audio subset: other information on the release, such as the year of release.
- Score subset: duration (no. of measures), time signature.
- Additional annotations include: local keys, structure, measures.

---

### Billboard
> License: CC0

- Authors are essentially performers, although they may be composers as well.
- Extra information about the metre, total duration (in seconds), billboard IDs (if this makes sense externally).
- Additional annotations include: structure (via SALAMI).

**Other observations**
- No clear JAMS is produced with both local-global keys other than chords: need to do this from scratch (but we can at least use the MIREX lab files as a starting point).
- Not clear how we can handle unknown modulation (marked by tonic:?) according to [the authors](https://ddmal.music.mcgill.ca/research/The_McGill_Billboard_Project_(Chord_Analysis_Dataset)/).
    
> Similar `metre` and `tonic` comments may also appear in the main body of the annotations, corresponding to changes of key or metre. In some cases, there is no obviously prevailing key, in which case the tonic pitch class is denoted `?`.

---

### Chordify Annotator Subjectivity Dataset
> License: [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

- Same observations of Billboard apply -- as this is a subset of Billboard.
- Name of annotator is not given, but a different structure in the annotator's sandbox is used (see below)
```json
"annotator": {
   "instrument": "Guitar", 
   "id": "A1"
 },
```
- Extra information on the difficulty of the annotation in the annotation's sandbox.
```json
"sandbox": {
   "reported_time": 20, 
   "reported_difficulty": 1
}, 
```
- Identifiers: Billboard identifier, and YouTube URL

---

### Robbie Williams
> License: not specified

- Author is always Robbie Williams, the performer.
- Extra information of the release: name, track number, and year.

---

### TMC Collections
> License: not specified

TMC collections include the `USpop2002` and the `RWC-Pop` partitions, which are also available in `jams-data`. However, the format of these JAMS files is old and the metadata is poorly formatted. Therefore, we start from scratch again (from the LABs).

- RWC-Pop: composer/artist distinction can be found in the RWC metadata. Role of performers also available.
- RWC-Pop: extra information includes duration, tempo.
- Uspop2002: artists correspond to performers
- Uspop2002: extra information includes release name (with mixed info as well, such as disc number), and file track.
- Uspop2022: extra information may be retrieved from the mother dataset in MARL from which this TMC collection comes from.

## Symbolic partitions

### Real Book
> License: not specified

- Metadata is extracted from the file name of LAB files, where the "-" symbol separates the title from the artist(s).
- Artists can be either (or both) composers or/and performers, so this cannot be distinguished.
- Multiple artists are generally separated by "&" or "," (which may also appear together).
- Time signature information is not available in the .xlab files. Tempo is not available as well.
- Temporal information is expressed in measure:beat, start-time (s), last beat, end-time (s). This suggests a possible synchronisation of the annotations, which should be simply the result of the sonification of a BiaB file (no magic there, but we do not have access to the script that generated the .xlab file from the original BiaBs).

---

### Weimar Jazz Database
> License: [Open DataBase License (ODbL)](https://opendatacommons.org/licenses/odbl/1.0/)

- Please, note that Weimar contains transcription of performances (of Jazz standards).
- It important to include in the JAMS file the `Position in Track` information -- denoting when the transcription/annotation starts. However, please note that it would make the JAMS hybrid, as this would be expressed in absolute (seconds) units rather than in metrical.
- In addition to the main performer, also the (full?) lineup is given.
- The instrument the performer plays is also specified.
- Extra information includes the (main) time signature, key, album title, tempo, style / groove/feel.
- Explicit links to MusicBrainz.
- A separate file is provided for the YouTube links found by the maintainers.
- Additional annotations include: structure, beat timing.

Chord grammar used: https://jazzomat.hfm-weimar.de/melospy/annotations.html

Notes
- Some MusicBrainz IDs seem to be obsolete and cannot be resolved.

---

### Wikifonia
> License: public domain (info on Wikipedia)

- No consistent conventions in the file name, although it follows the "Artist - Title" rule for most files. More reliable if retrieving this from the MusicXML, but again, `contributors` can be several and their role may not be clear.
- Artists can be either composers or performers given the lack of clear conventions. Hence, it is more reliable to use the generic "artist" field when populating the JAMS.
- Parsing is handled via `music21` - with measure and quarter beats after the score expansion, when possible.
- Additional annotations may be extracted from the MusicXML, although there is a lack of conventions (e.g. they may be just comments).

Other parsing-related observations and comments.

- The formatting of transcriptions may not be consistent, especially when it comes to repetitions. In the latter case, score expansion is not possible.
    - Current solution: when we cannot expand, we keep track of this.
- A few scores may not contain chord annotations.
    - Current solution: keep track of empty tracks.
- A few scores contain hybrid chord annotation: defined using chord symbols as such, but also chordal classes where the note constituents are given — one by one (including dyads).
    - Current solution: for now, we will create a hybrid annotation.
- A few scores do not explicitly provide the key (e.g. G major), but instead, they provide the actual key signature (e.g. 1 sharp).
    - Current solution: we use music21’s `asKey()` method to get the explicit key.
- A few scores encode pedal information directly in the chord symbol, e.g. Bbpedal.
    - Current solution: keep as it is for now.
- Wikifonia has a list of badly formatted file names
    - Possible solution: as this happens for about 30 files, we can intervene manually

---

### iReal Pro
> License: public domain music data.
- The artist can be either the composer or the performer, or even both -- as there are no strict conventions in the naming of iReal files.
- Information about the genre is available, and this is useful considering the heterogeneity of this partition.
- Extra information includes tempo, and global time signature.
- Please, note that iReal files potentially include other sources of annotations: such as structures / parts.

---

### Band-in-a-box
> License: not explicitly specified, but not for commercial use as per readme.

- Currently, we cannot redistribute the original data, as this is made explicit in the readme.
- Name of the artists is unknown, and when present, it cannot be disambiguated.
- **@Andrea any other metadata information or annotation type from BiaB files?**

---

### When in Rome
> License: [CC BY-SA](https://creativecommons.org/licenses/by-sa/3.0/)

- Parsing is handled by music21, thanks to the `RomanText` standard.
- Metadata is quite rich, although all merged in the `collection` field of the musical work. This includes: name of the collection, opera number, and in rare cases, a serial number / code.
- Separation of movement is not consistent for the subset `Variations and Grounds`.
- As this collection deals exclusively with musical works, the artist is always the composer.
- The name of the annotator can be available in the RomanText file.

Supplementary information about the dataset.

Extensive project on annotating chords from classical scores, proposing a specific format — the RomanText format (see excerpt below, more info [here](https://fourscoreandmore.org/working-in-harmony/analysis/)). The RomanText format has utilities available in the `music21` converter to read these files.

```markdown
Composer: J.S. Bach
Title: Prelude No.1 (BWV846)
Analyst: Mark Gotham [feel free to leave this blank]

m1 b1 C: I
m2 b1 ii42
m3 b1 V65
m4 b1 I
m5 b1 vi6
m6 b1 G: V42
m7 b1 I6
m8 b1 IV42
m9 b1 ii7
m10 b1 V7
m11 b1 I
```

Overall, the collection provides several corpuses with files that are not necessarily associated to an harmonic analysis. What we need to consider here, is the RomanText files that were generated from other datasets or originally produced by annotators. The unique types of analyses are:

- analysis.txt (for most files)
- analysis_A.txt and analysis_B.txt
- analysis_BPS.txt (for 6 files)

---

### Rock Corpus
> License:  CC BY 4.0

- Authors are essentially performers, although they may be composers as well.
- The partition provides 2 annotations per piece, which at the moment result in 2 different JAMS files.
- Metadata includes also the year of release.
- For a subset of the corpus, lyrics and melody transcriptions are also available.

---

### Mozart Piano Sonata
> License: CC BY-NC-SA 4.0

- Author is always Mozart, a composer.
- The title contains also the tonality of the sonata.
- Additional metadata includes: the movement number and the name of the movement (e.g. Adagio).
- The name of the annotator is available for each piece.
- Explicit links are available to: MusicBrainz, Wikidata, IMSLP

---

### Jazz Corpus
> License: not specified

- Unfortunately, titles and authors are not available for this partition.
- Candidate for computational studies: we know that it comes from the Real Book but nothing more than that.
- Follows a particular vocabulary for chords, that is used by the JazzParser.

---

### Nottingham
> License: not specified

- The corpus has subsets, given that each ABC file is a collector of tunes.
- There is no direct information of the authors of these tunes.
- Parsing goes through music21, as for MusicXML, RomanText.
- "Sample midi files, pdf files and YouTube links can be found on [http://ifdo.ca/~seymour/celticmidis/](http://ifdo.ca/~seymour/celticmidis/index.html)."


