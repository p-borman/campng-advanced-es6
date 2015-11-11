import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import SideNav from './sideNav/sideNav';
import Markdown from './markDown/markDown';
import MarkdownPreview from './markDownPreview/markDownPreview';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  SideNav.name,
  Markdown.name,
  MarkdownPreview.name
]);

export default componentModule;
