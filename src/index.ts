import "reflect-metadata";
import 'dotenv/config';
import Server from './server';
import './application/config/container';

Server.start();
