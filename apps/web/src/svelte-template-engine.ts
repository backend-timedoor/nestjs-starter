require('svelte/register');

export function svelteTemplateEngine(filePath: string, options: any, next: any) {
    const file = filePath.split('src')[1];

    const Component = require(`.${file.replace(/\\/g, "/")}`).default;

    const { html } = Component.render(options);
    next(null, html);
}