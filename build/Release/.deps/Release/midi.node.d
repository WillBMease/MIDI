cmd_Release/midi.node := ./gyp-mac-tool flock ./Release/linker.lock c++ -bundle -Wl,-search_paths_first -mmacosx-version-min=10.5 -arch x86_64 -L./Release  -o Release/midi.node Release/obj.target/midi/src/node-midi.o -undefined dynamic_lookup -framework CoreMIDI -framework CoreAudio -framework CoreFoundation
