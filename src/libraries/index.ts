/* LIBRARIES */
/*Server package */
import express	 from "express";
import postgress from 'pg';
import cors		 from 'cors'
import bodyparser from 'body-parser'
import Sequelize  from 'sequelize'
import dotenv     from 'dotenv'

/* content package */
//import { remark } from "remark";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm"; // Untuk dukungan tabel
import remarkHtml from "remark-html";
import matter from "gray-matter";



export {
	express,
	postgress,
	cors,
	bodyparser,
	Sequelize,
	dotenv,
	unified,
	remarkGfm,
	remarkParse,
	remarkHtml,
	matter
}

