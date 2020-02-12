const genHTML = require('./genHTML.js');
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');
const pdf = require('html-pdf');

const gitHubData = {
  user: "",
  name: "",
  color: "",
  location: "",
  company: "",
  bio: "",
  following: "",
  followers: "",
  public_repos: "",
  public_gists: "",
  html_url: "",
  avatar_url: "",
};


