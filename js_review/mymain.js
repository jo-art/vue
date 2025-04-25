//my ={myfunc,myinfunc} 
//import my from './mymodule.js' //별칭으로 가져올때
//import {myfunc} from './mymodule.js' //필요한 함수 가져올때
//import defFunction from './mymodule.js' //디펄트 함수
import * as my from './mymodule.js' //모두다 가져올때 *
my.myfunc('모듈테스트');

//my('디폴트함수');