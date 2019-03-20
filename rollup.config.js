import typescript from 'rollup-plugin-typescript2';

export default {
    input: './index.ts',
    output: {
        file: './dist/component-palette.esm',
        format: 'esm'
    },
    plugins: [
        typescript({ clean: true })
    ],
    external: ['react', 'styled-components']
}