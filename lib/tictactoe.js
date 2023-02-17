/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

class TicTacToe{constructor(r="x",t="o"){this.playerX=r,this.playerO=t,this._currentTurn=!1,this._x=0,this._o=0,this.turns=0}get board(){return this._x|this._o}get currentTurn(){return this._currentTurn?this.playerO:this.playerX}get enemyTurn(){return this._currentTurn?this.playerX:this.playerO}static check(r){for(let t of[7,56,73,84,146,273,292,448])if((r&t)===t)return!0;return!1}static toBinary(r=0,t=0){if(r<0||r>2||t<0||t>2)throw new Error("\n[!] Posición invalida\n");return 1<<r+3*t}turn(r=0,t=0,e){if(511===this.board)return-3;let n=0;if(null==e){if(t<0||t>8)return-1;n=1<<t}else{if(t<0||t>2||e<0||e>2)return-1;n=TicTacToe.toBinary(t,e)}return this._currentTurn^r?-2:this.board&n?0:(this[this._currentTurn?"_o":"_x"]|=n,this._currentTurn=!this._currentTurn,this.turns++,1)}static render(r=0,t=0){return[...(parseInt(r.toString(2),4)+2*parseInt(t.toString(2),4)).toString(4).padStart(9,"0")].reverse().map(((r,t)=>1==r?"X":2==r?"O":++t))}render(){return TicTacToe.render(this._x,this._o)}get winner(){let r=TicTacToe.check(this._x),t=TicTacToe.check(this._o);return r?this.playerX:!!t&&this.playerO}}(new TicTacToe).turn;export default TicTacToe;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/