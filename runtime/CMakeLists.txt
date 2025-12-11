cmake_minimum_required(VERSION 3.16)

project(farog-runtime VERSION 1.0.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

add_executable(farog-runtime
    src/main.cpp
)

# Здесь в будущем можно добавить исходники движка JS/TS, stdlib и др.
