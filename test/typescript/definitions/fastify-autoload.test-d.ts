import fastify, { FastifyInstance, FastifyPlugin } from 'fastify'
import { expectType } from 'tsd'

import { fastifyAutoload as fastifyAutoloadNamed, AutoloadPluginOptions } from "../../../"
import fastifyAutoloadDefault from "../../../"
import * as fastifyAutoloadStar from "../../../"
import fastifyAutoloadCjsImport = require("../../../")
const fastifyAutoloadCjs = require("../../../")

const app: FastifyInstance = fastify();
app.register(fastifyAutoloadNamed);
app.register(fastifyAutoloadDefault);
app.register(fastifyAutoloadCjs);
app.register(fastifyAutoloadCjsImport.default);
app.register(fastifyAutoloadCjsImport.fastifyAutoload);
app.register(fastifyAutoloadStar.default);
app.register(fastifyAutoloadStar.fastifyAutoload);

expectType<FastifyPlugin<AutoloadPluginOptions>>(fastifyAutoloadNamed);
expectType<FastifyPlugin<AutoloadPluginOptions>>(fastifyAutoloadDefault);
expectType<FastifyPlugin<AutoloadPluginOptions>>(fastifyAutoloadCjsImport.default);
expectType<FastifyPlugin<AutoloadPluginOptions>>(
  fastifyAutoloadCjsImport.fastifyAutoload
);
expectType<FastifyPlugin<AutoloadPluginOptions>>(fastifyAutoloadStar.default);
expectType<FastifyPlugin<AutoloadPluginOptions>>(
  fastifyAutoloadStar.fastifyAutoload
);
expectType<any>(fastifyAutoloadCjs);

let opt1: AutoloadPluginOptions = {
  dir: 'test'
}
const opt2: AutoloadPluginOptions = {
  dir: 'test',
  ignorePattern: /skip/
}
const opt3: AutoloadPluginOptions = {
  dir: 'test',
  scriptPattern: /js/,
  indexPattern: /index/,
}
const opt4: AutoloadPluginOptions = {
  dir: 'test',
  options: {
    prefix: 'test'
  }
}
const opt5: AutoloadPluginOptions = {
  dir: 'test',
  maxDepth: 1,
}
app.register(fastifyAutoloadDefault, opt1)
app.register(fastifyAutoloadDefault, opt2)
app.register(fastifyAutoloadDefault, opt3)
app.register(fastifyAutoloadDefault, opt4)
app.register(fastifyAutoloadDefault, opt5)
