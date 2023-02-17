/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import EventEmitter from"events";const isNumber=e=>"number"==typeof e&&!isNaN(e),delay=e=>{return"number"==typeof(t=e)&&!isNaN(t)&&new Promise((t=>setTimeout(t,e)));var r},QUEQUE_DELAY=5e3;export default class Queque extends EventEmitter{_queque=new Set;constructor(){super()}add(e){this._queque.add(e)}has(e){return this._queque.has(e)}delete(e){this._queque.delete(e)}first(){return[...this._queque].shift()}isFirst(e){return this.first()===e}last(){return[...this._queque].pop()}isLast(e){return this.last()===e}getIndex(e){return[...this._queque].indexOf(e)}getSize(){return this._queque.size}isEmpty(){return 0===this.getSize()}unqueue(e){let t;if(e){if(this.has(e)){t=e;if(!this.isFirst(e))throw new Error("El artículo no es el primero en la cola")}}else t=this.first();t&&(this.delete(t),this.emit(t))}waitQueue(e){return new Promise(((t,s)=>{if(this.has(e)){const s=async(s=!1)=>{var i,r;await(i=5e3,"number"==typeof(r=i)&&!isNaN(r)&&new Promise((e=>setTimeout(e,i)))),s&&this.unqueue(e),this.isEmpty()||this.unqueue(),t()};this.isFirst(e)?s(!0):this.once(e,s)}else s(new Error("objeto no encontrado"))}))}}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/