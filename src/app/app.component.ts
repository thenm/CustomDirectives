import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images= [{
    title: 'Labardor',
    url: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Bulldog',
    url: 'https://images.unsplash.com/photo-1521907236370-15adf2297445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1414&q=80'
  }, {
    title: 'Golden Retriever',
    url: 'https://images.unsplash.com/photo-1544913021-e6bf406a86fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Serbiean Husky',
    url: 'https://images.unsplash.com/photo-1574273443477-87bf272e5100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
  },{
    title: 'Labardor',
    url: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Bulldog',
    url: 'https://images.unsplash.com/photo-1521907236370-15adf2297445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1414&q=80'
  }, {
    title: 'Golden Retriever',
    url: 'https://images.unsplash.com/photo-1544913021-e6bf406a86fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Serbiean Husky',
    url: 'https://images.unsplash.com/photo-1574273443477-87bf272e5100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
  },{
    title: 'Labardor',
    url: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Bulldog',
    url: 'https://images.unsplash.com/photo-1521907236370-15adf2297445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1414&q=80'
  }, {
    title: 'Golden Retriever',
    url: 'https://images.unsplash.com/photo-1544913021-e6bf406a86fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Serbiean Husky',
    url: 'https://images.unsplash.com/photo-1574273443477-87bf272e5100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
  },{
    title: 'Labardor',
    url: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Bulldog',
    url: 'https://images.unsplash.com/photo-1521907236370-15adf2297445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1414&q=80'
  }, {
    title: 'Golden Retriever',
    url: 'https://images.unsplash.com/photo-1544913021-e6bf406a86fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Serbiean Husky',
    url: 'https://images.unsplash.com/photo-1574273443477-87bf272e5100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
  },{
    title: 'Labardor',
    url: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Bulldog',
    url: 'https://images.unsplash.com/photo-1521907236370-15adf2297445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1414&q=80'
  }, {
    title: 'Golden Retriever',
    url: 'https://images.unsplash.com/photo-1544913021-e6bf406a86fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Serbiean Husky',
    url: 'https://images.unsplash.com/photo-1574273443477-87bf272e5100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
  },{
    title: 'Labardor',
    url: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Bulldog',
    url: 'https://images.unsplash.com/photo-1521907236370-15adf2297445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1414&q=80'
  }, {
    title: 'Golden Retriever',
    url: 'https://images.unsplash.com/photo-1544913021-e6bf406a86fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Serbiean Husky',
    url: 'https://images.unsplash.com/photo-1574273443477-87bf272e5100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
  },{
    title: 'Labardor',
    url: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Bulldog',
    url: 'https://images.unsplash.com/photo-1521907236370-15adf2297445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1414&q=80'
  }, {
    title: 'Golden Retriever',
    url: 'https://images.unsplash.com/photo-1544913021-e6bf406a86fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Serbiean Husky',
    url: 'https://images.unsplash.com/photo-1574273443477-87bf272e5100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
  },{
    title: 'Labardor',
    url: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Bulldog',
    url: 'https://images.unsplash.com/photo-1521907236370-15adf2297445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1414&q=80'
  }, {
    title: 'Golden Retriever',
    url: 'https://images.unsplash.com/photo-1544913021-e6bf406a86fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Serbiean Husky',
    url: 'https://images.unsplash.com/photo-1574273443477-87bf272e5100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
  },{
    title: 'Labardor',
    url: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Bulldog',
    url: 'https://images.unsplash.com/photo-1521907236370-15adf2297445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1414&q=80'
  }, {
    title: 'Golden Retriever',
    url: 'https://images.unsplash.com/photo-1544913021-e6bf406a86fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Serbiean Husky',
    url: 'https://images.unsplash.com/photo-1574273443477-87bf272e5100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
  }];
  currentPage = 0;
  title : 'Pagination'; 
  checkWindowIndex(i: number) {
    return Math.abs(this.currentPage - i) < 5
  }
}
