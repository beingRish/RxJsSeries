import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  template: `
    <div class="m-3">
      <h2>Promise</h2>      
    </div>
    <!-- <strong>{{promiseVal}}</strong> -->
  `,
  styles: [`
    div{
      text-align: center;
    }
  `]
})
export class PromiseComponent implements OnInit{

  DellAvailable(){
    return true
  }

  HpAvailable(){
    return false
  }

  promiseVal: any;

  dell = {
    brand: 'Dell',
    hardDisk: '2 TBB',
    color: 'Black'
  }

  hp = {
    brand: 'Hp',
    hardDisk: '1 TBB',
    color: 'Silver'
  }

  notAvail = {
    brand: 'Not Available',
    status: 'Failed'
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolved')
      // reject('Promise is rejected')
      
      if(this.DellAvailable()){
        return setTimeout(() => {
          // resolve('Dell is Purchased')
          resolve(this.dell)

        }, 3000)
      }else if(this.HpAvailable()){
        return setTimeout(() => {
          // resolve('Hp is Purchased')
          resolve(this.hp)
        }, 3000);
      }else{
        return setTimeout(() => {
          // reject('Laptop is not available on store')
          resolve(this.notAvail)
        }, 3000)
      }
    })

    buyLaptop.then(res => {
      console.log('then code => ', res);
      this.promiseVal = res;
    }).catch(res => {
      console.log('catch code => ', res);
      this.promiseVal = res;
    })
  }

 
}
