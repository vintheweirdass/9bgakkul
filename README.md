![image](./banner.png)
JADI SVELTE YAYYYYY

## Info
Ini source codenya 9b.is-not.cool buat PBM nya aku (@vintheweirdass)
Jangan lupa dikentutin

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project
If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
deno run -A npm:sv create

# create a new project in my-app
deno run -A npm:sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `deno install`, start a development server:

```bash
deno task dev

# or start the server and open the app in a new browser tab
deno task dev -- --open
```

## Building

To create a production version of your app:

```bash
deno task build
```

You can preview the production build with `deno task preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
