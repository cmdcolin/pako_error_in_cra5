# Demo showing pako can't build in CRA5

Produces error

```
$ yarn build
yarn run v1.22.18
$ react-scripts build
Creating an optimized production build...
Failed to compile.

Module parse failed: Unexpected token (255:123)
File was processed with these loaders:
 * ./node_modules/babel-loader/lib/index.js
 * ./node_modules/source-map-loader/dist/cjs.js
You may need an additional loader to handle the result of these loaders.
|  *     not null.
|  */
> var gen_bitlen = function gen_bitlen(s, desc) /*    deflate_state *s;*/ /*    tree_desc *desc;    /* the tree descriptor */*/{
|   var tree = desc.dyn_tree;
|   var max_code = desc.max_code;


```


