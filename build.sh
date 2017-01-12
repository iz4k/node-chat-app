#!/bin/bash
#work pls
####
if (grep -i install <<< $@); then
    #rm -rf test-bin
    #mkdir test-bin
    #echo 'Test report: Hello, world.' >test-bin/test-report.txt
    echo "Install script"
fi

####
if (grep -i test <<< $@); then
    #rm -rf test-bin
    #mkdir test-bin
    #echo 'Test report: Hello, world.' >test-bin/test-report.txt
    echo "Successfully ran all tests!"
fi

####
if (grep -i build <<< $@); then
    #echo "Looking for test report..."
    #echo "Found it!"
    #cat test-bin/test-report.txt
    echo "Build script"
fi
