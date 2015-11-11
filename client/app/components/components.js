import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import SideNav from './sideNav/sideNav';
import markdownEditor from './markdownEditor/markdownEditor'
import Raty from './raty/raty'
let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  SideNav.name,
  markdownEditor.name,
  Raty.name
]);

export default componentModule;
