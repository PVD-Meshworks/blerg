# PVD Meshworks Blerg

A ~~blog~~ blerg to catalog the history of PVD Mesh Works. Built using Deno and
Lume.

## Getting Started

This is built using Deno and Lume. Those will need to be installed before this
site can be run:

- [Install Deno](https://docs.deno.com/runtime/getting_started/installation/)
- [Install Lume](https://lume.land/docs/overview/installation/)

You should be able to start the dev server by running:

```shell
$ deno task serve
```

Deno has built in Linter / Formatters. Run those with these commands:

```shell
$ deno lint
$ deno fmt
```

## Project Structure

Lume uses the project file structure to determine the shape of the production
site. So, everything in `src/` that is _not_ in `src/_includes/` is presumed to
be a page (or some other kind of file that needs to be served), and is processed
by Lume. So, for organization purposes, `styles/` contains all _global_ level
CSS styles, and is a direct child of `src/`, but all Lume components and layouts
are in `src/_includes/`.
