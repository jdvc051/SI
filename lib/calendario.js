/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let tiempoTranscurrido=Date.now(),fechajs=new Date(tiempoTranscurrido);var Epoca=fechajs.getFullYear(),Mes=fechajs.getMonth(),NumMes=fechajs.getMonth(),NumDiMes=fechajs.getDate(),Dia=fechajs.getDay(),SaluHora=fechajs.getHours(),HorasT=fechajs.getHours(),MinutosT=fechajs.getMinutes(),SegundosT=fechajs.getSeconds();switch(NumMes){case 0:NumMes="1";break;case 1:NumMes="2";break;case 2:NumMes="3";break;case 3:NumMes="4";break;case 4:NumMes="5";break;case 5:NumMes="6";break;case 6:NumMes="7";break;case 7:NumMes="8";break;case 8:NumMes="9";break;case 9:NumMes="10";break;case 10:NumMes="11";break;case 11:NumMes="12"}switch(Mes){case 0:Mes="De Enero Del";break;case 1:Mes="De Febrero Del";break;case 2:Mes="De Marzo Del";break;case 3:Mes="De Abril Del";break;case 4:Mes="De Mayo Del";break;case 5:Mes="De Junio Del";break;case 6:Mes="De Julio Del";break;case 7:Mes="De Agosto Del";break;case 8:Mes="De Septiembre Del";break;case 9:Mes="De Octubre Del";break;case 10:Mes="De Noviembre Del";break;case 11:Mes="De Diciembre Del"}switch(Dia){case 0:Dia="Domingo";break;case 1:Dia="Lunes";break;case 2:Dia="Martes";break;case 3:Dia="Miercoles";break;case 4:Dia="Jueves";break;case 5:Dia="Viernes";break;case 6:Dia="Sabado"}switch(SaluHora){case 0:case 1:case 2:SaluHora="Buena Madrugada";break;case 3:case 4:case 5:SaluHora="Buenos Dias";break;case 6:SaluHora="Buenos Dias!!!";break;case 7:case 8:case 9:case 10:SaluHora="Que tengas un excelente dia";break;case 11:case 12:case 13:SaluHora="Buen dia";break;case 14:case 15:case 16:case 17:case 18:case 19:SaluHora="Buenas Tardes";break;case 20:case 21:case 22:case 23:SaluHora="Buenas Noches"}let fechaCompleta=Dia+" "+NumDiMes+" "+Mes+" "+Epoca,saludHora=SaluHora;export default{fechaCompleta,saludHora,NumMes,Epoca};

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/