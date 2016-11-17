import express from "express";
import consign from "consign";

const app = express();

//Consign makes applications easier to develop with logical file separation and automatic script loading.
consign()
    .include('libs/middlewares.js')
    .then('libs/boot.js')
    .then('routes')
    .into(app)
