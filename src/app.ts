import express from "express";
import router from "./router";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.database();
    this.middleware();
    this.routes();
  }

  private database() {
    console.log("Database connection");
  }

  private routes() {
    this.app.use(router);
  }

  private middleware() {
    this.app.use(express.json());
  }
}

export default new App().app;
