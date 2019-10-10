import Vue from 'vue';

import BlankLayout from 'component/layout/blank';
import BlogLayout from 'component/layout/blog';
import FamilyLayout from 'component/layout/standard';

Vue.component(BlankLayout.name, BlankLayout);
Vue.component(BlogLayout.name, BlogLayout);
Vue.component(FamilyLayout.name, FamilyLayout);
