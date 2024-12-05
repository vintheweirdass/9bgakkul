const cmd = new Deno.Command("deno", { args: ["task", "dev"] })
cmd.spawn()