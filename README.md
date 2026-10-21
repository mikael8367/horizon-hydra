<div align="center">

[<img src="https://raw.githubusercontent.com/hydralauncher/hydra/refs/heads/main/resources/icon.png" width="144"/>](https://github.com/mikael8367/horizon-hydra)

  <h1 align="center">Horizon</h1>

  <p align="center">
    <strong>Horizon is a community customization of Hydra Launcher, focused on a personalized desktop game-library experience. It retains the upstream Electron, React, TypeScript, Rust and libtorrent architecture while changes are developed in this fork.</strong>
  </p>

[![upstream](https://img.shields.io/badge/upstream-Hydra%20Launcher-2ea043)](https://github.com/hydralauncher/hydra)
[![license](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

</div>

## Project status

Horizon is based on the open-source [Hydra Launcher](https://github.com/hydralauncher/hydra). This fork is being personalized under the Horizon name. A rebrand does not by itself add new launcher features; each feature must be implemented and tested separately.

## Build from source

This project inherits the upstream desktop application architecture. It is **not a website or an Android APK**.

Requirements:

- Node.js and Yarn (use the version specified in `package.json`)
- Rust toolchain for the native addon
- Git and a C++ toolchain (Visual Studio C++ Build Tools on Windows, GCC/Clang on Linux, or Xcode command-line tools on macOS)

Install dependencies and run the project using the upstream build instructions in [Hydra's documentation](https://docs.hydralauncher.gg/getting-started). The repository's build and tests must pass on the target platform before a release is considered ready.

## Upstream attribution

Horizon is a fork of [Hydra Launcher](https://github.com/hydralauncher/hydra). The original project and its contributors retain their copyright. The upstream MIT license is preserved in [LICENSE](LICENSE); see that file for the applicable terms.
