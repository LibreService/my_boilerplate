em++ \
  -O2 \
  -s ALLOW_MEMORY_GROWTH=1 \
  -s EXPORTED_FUNCTIONS=_init,_length \
  -s EXPORTED_RUNTIME_METHODS='["ccall"]' \
  -o public/boilerplate.js \
  wasm/api.cpp
