---
title: "PWS2 Update #1"
image: /img/blogs/update.png
date: 2026, 8, 28
num: 5
to: /blog/5
description: One month later. And not much to show for it
---

Dear PWS2 heads,

I write to you right now to tell you about the progress of our beloved sequel. The progress is not much but I have learned a lot.

## What I have done

So in terms of writing code all I have really done is set up the Github repo with the libraries set up. I have made a models repo with Protobuf that is going to hold all the schemas for the whole app. Setting that repo up with CMake and the models repo as a dependency was harder than anticipated. In the end I decided that I should have a Github action that compiles the Protobuf code into C++ and put into a tar file that gets downloaded by CMake. 

A problem that was happening was that the folders weren't named correctly because CMake's FetchContent automatically flattens the tar file when using a tar file So I had to wrap everything in another dummy folder in order for the includes to not get messed up. That took me way longer than I am willing to admit to figure out.

```yml
name: Release

on:
  push:
    tags:
      - "v*"

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v5

      - name: Install buf
        uses: bufbuild/buf-setup-action@v1
        with:
          version: "1.72.0"
          github_token: ${{ secrets.GITHUB_TOKEN }}

      - name: Install protoc
        uses: arduino/setup-protoc@v3
        with:
          version: "35.1"

      - name: Generate code
        run: buf generate

      - name: Create tarball
        run: tar -czf pws2model-${{ github.ref_name }}.tar.gz -C gen cpp

      - name: Create release
        uses: softprops/action-gh-release@v3
        with:
          files: pws2model-${{ github.ref_name }}.tar.gz
```

```cmake
FetchContent_Declare(
  models
  URL ${MODELS_URL}
)
FetchContent_MakeAvailable(models)

add_library(pws2_models INTERFACE)
target_include_directories(pws2_models INTERFACE ${models_SOURCE_DIR})
```

## What I have learned

### C++

I finally finished the _Tour of C++_ book. I kind of sped through the last parts of the book knowing that I can just use the book as a reference whenever I need to.

### CMake

I have also had to learn CMake. For my C projects I always used plain GNU Make but now that I have learned C++ I think it is time to learn CMake as well. I used the tutorial exercises on the CMake website. I also decided to use Ninja as the build system but I haven't learned Ninja itself, I just use it through CMake which seems to be the intended way but a part of me still wants to do a deep dive on it just to be able to say I did that but I have already spent a lot of time on the learning part, I gotta start doing. 

### Cryptography

After that I thought I was ready to roll so I started thinking about how to design authentication. The more I thought and researched about it I realized I never really learned how cryptography works. So I decided to postpone the designing stage in order to start actually learning this important part of computer science. Again as much as I want to do a deep dive on the whole topic by reading a whole textbook on it, I decided to go for something that allows me to learn just enough so I can start coding ASAP. I found just the resource [Crypto101](https://www.crypto101.io/). I am halfway through the book and even though it's a very informative book, it seems to still be a bit incomplete because there are still some TODO parts in it. The last commit in the Github page was 2 years ago so I don't think it will be completed later either. Either way I could not ask for anything better because it is pretty short and it does not get too stuck in all the math that is required to fully understand it.

### Typing

This is a bit embarrassing to admit but I have also decided to actually learn typing. I never formally learned typing so during my whole life I have kind of invented my own (wrong) way of typing. I can type at reasonable speeds in that way but I want to type at my full potential and I can already feel a difference even though I am a bit slower right now. I was never the most accurate typist but now even though I am slower, I have been looking at the keyboard less and make less mistakes. EdClub is the website I am using and I would recommend it to anyone that wants to learn the most efficient ways to type. Writing blogs is also pretty good practice.

## PWS2 When?

Honestly without AI I think the MVP for this project is going to be ready sometime Q1 next year assuming that I don't have a lot of work during this time (but hopefully I will). The scope of the project is bigger than what I wanted to do in the beginning but I really think it's a good and useful idea, so I am willing to take the risk.

By next month I hope to have a design for a protocol for how the client and server are supposed to communicate and I hope to not have to run into any other thing that I feel like I have to learn. Another optional milestone I am defining is having a lot of detailed tasks defined that will make the coding part a lot more straightforward. 

I have been a bit busy this month as well so I did not spend as much time as I wanted to on this project but I feel like the time I have spent has been spent pretty well. This blog has been a bit drier than I want it to be but this information had to be communicated to all you PWS2 heads and there is no other way to put it really.

Anyways I have to go to a family gathering now. Bye.
