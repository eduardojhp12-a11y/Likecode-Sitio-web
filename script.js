
(function(){
var WA='584000000000',rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var IC={web:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',shop:'<path d="M3 4h2l2.5 11h11L21 7H6"/><circle cx="9" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/>',code:'<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',mob:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',cloud:'<path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9Z"/>',pen:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',chip:'<path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4"/><rect x="7" y="7" width="10" height="10" rx="2"/>',erp:'<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',help:'<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/>',net:'<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>',book:'<path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2ZM8 7h7"/>',share:'<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 11 7.6-4M8.2 13l7.6 4"/>',tool:'<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5Z"/>'};
function sv(k,c){return '<svg class="i '+(c||'')+'" viewBox="0 0 24 24" aria-hidden="true">'+IC[k]+'</svg>'}
var S=[
{id:'paginas-web',n:'Páginas web',t:'Tu empresa en internet',s:'Una página profesional, rápida y fácil de ver en el celular.',d:'Diseñamos tu página para que tus clientes te encuentren, confíen en ti y te escriban. Rápida, segura y lista para aparecer en Google.',i:['Diseño propio para celular, tablet y computadora','Textos, imágenes y botón directo a WhatsApp','Posicionamiento básico para aparecer en Google','Dominio, hosting y certificado de seguridad'],o:'tu negocio aún no está en internet o tu página actual se ve antigua y no te trae clientes.',g:['#1d4ed8','#22d3ee'],k:'web'},
{id:'tiendas-en-linea',n:'Tiendas en línea',t:'Vende las 24 horas',s:'Catálogo, carrito y pagos en línea, con pedidos e inventario conectados.',d:'Tu tienda abierta todos los días: tus clientes eligen y pagan, y tú recibes cada pedido ordenado en un panel.',i:['Catálogo con fotos, precios y categorías','Carrito y pagos en línea','Panel de pedidos, clientes e inventario','Avisos de cada venta por WhatsApp o correo'],o:'hoy vendes por redes sociales y pierdes tiempo anotando pedidos a mano.',g:['#0f766e','#3b82f6'],k:'shop'},
{id:'desarrollo-personalizado',n:'Desarrollo personalizado',t:'El programa exacto para cómo trabajas',s:'Sistemas web y apps desde cero para automatizar tus procesos.',d:'Si tu negocio tiene procesos únicos, construimos el sistema que los automatiza: cobros, inventario, clientes, reportes y más.',i:['Diagnóstico de tus procesos antes de programar','Sistema web con usuarios y permisos','Reportes y facturación a tu medida','Capacitación para tu equipo'],o:'trabajas con hojas de cálculo, papeles o varios programas que no se conectan.',g:['#6d28d9','#3b82f6'],k:'code'},
{id:'sistemas-administrativos',n:'Sistemas administrativos',t:'Gestión de toda la empresa',s:'ERP, CRM y control administrativo en un solo sistema.',d:'Unificamos facturación, inventario, compras, clientes y reportes para que veas tu empresa completa y decidas con datos.',i:['Facturación, cobros y cuentas por pagar','Control de inventario y compras','Gestión de clientes (CRM)','Reportes e indicadores del negocio'],o:'tu administración depende de varios archivos y cuesta saber cómo va el negocio.',g:['#1e3a8a','#0891b2'],k:'erp'},
{id:'apps-moviles',n:'Apps móviles',t:'Tu negocio en el bolsillo',s:'Apps para iOS y Android con una sola base de código.',d:'Creamos aplicaciones móviles claras y rápidas para tus clientes o tu equipo, publicadas en las tiendas de apps.',i:['App para iOS y Android','Notificaciones y modo sin conexión','Conexión con tu sistema web','Publicación en App Store y Google Play'],o:'tus clientes o empleados necesitan usar tu sistema desde el teléfono.',g:['#0e7490','#6d28d9'],k:'mob'},
{id:'diseno-ui-ux',n:'Diseño UI/UX',t:'Fácil de usar, agradable de ver',s:'Interfaces claras, probadas con usuarios reales.',d:'Diseñamos pantallas simples para que tus usuarios entiendan todo a la primera, antes de escribir una línea de código.',i:['Prototipos navegables','Pruebas con usuarios reales','Identidad y sistema de diseño digital','Pantallas listas para programar'],o:'tu producto es confuso o quieres validar una idea antes de invertir.',g:['#be185d','#6d28d9'],k:'pen'},
{id:'cloud-apis-e-ia',n:'Cloud, APIs e IA',t:'Conecta y automatiza',s:'Nube, integraciones y inteligencia artificial para ahorrar tiempo.',d:'Ponemos tu sistema en la nube, lo conectamos con pagos, facturación y WhatsApp, y sumamos IA donde de verdad ahorra trabajo.',i:['Servidores en la nube y copias de seguridad','Integración con pagos, facturación y WhatsApp','Asistentes de atención al cliente con IA','Monitoreo y alertas 24/7'],o:'tu equipo repite tareas a diario o tu sistema se cae y va lento.',g:['#047857','#0e7490'],k:'cloud'},
{id:'soporte-tecnico-remoto',n:'Soporte técnico remoto',t:'Soluciones rápidas, estés donde estés',s:'Nos conectamos a tus equipos a distancia para resolver problemas.',d:'Nos conectamos a tu computadora de forma segura para instalar programas, activar licencias, limpiar el sistema y dejarlo funcionando rápido.',i:['Instalación y configuración de programas','Eliminación de virus y limpieza del sistema','Ayuda con tus sistemas administrativos','Atención 24/7 por WhatsApp'],o:'necesitas resolver algo hoy y no puedes esperar a que alguien vaya hasta tu oficina.',g:['#0f172a','#3b82f6'],k:'help'},
{id:'mantenimiento-de-equipos',n:'Mantenimiento de equipos',t:'Mantén tus equipos en forma',s:'Revisamos tus computadoras, laptops y consolas para que duren más.',d:'Revisamos y mantenemos tus equipos para que funcionen sin problemas y duren más tiempo.',i:['Limpieza interna y cambio de pasta térmica','Formateo y reinstalación de sistemas','Reparación de hardware y reemplazo de piezas','Revisión preventiva periódica'],o:'tus equipos se calientan, van lentos o se apagan solos.',g:['#b45309','#be185d'],k:'tool'},
{id:'redes-y-equipos',n:'Redes y equipos',t:'Oficina conectada',s:'Cableado, wifi y equipos para que tu oficina funcione en orden.',d:'Para que tu sistema funcione bien, tu oficina necesita buen internet y equipos en orden. También nos encargamos de eso.',i:['Instalación de cableado y wifi en la oficina','Configuración de computadoras, servidores e impresoras','Protección contra virus y accesos no autorizados','Revisión y mantenimiento periódico'],o:'tu internet falla, tienes cables desordenados o necesitas montar una oficina nueva.',g:['#1d4ed8','#0f766e'],k:'net'},
{id:'cursos-de-programacion',n:'Cursos de programación',t:'Aprende a crear software',s:'Capacitación práctica en tecnologías de desarrollo.',d:'Formamos a tu equipo o a ti en las tecnologías que se usan hoy para crear páginas, sistemas y apps.',i:['Clases prácticas desde cero hasta nivel intermedio','Proyectos reales para tu portafolio','Grupos pequeños y horarios flexibles','Acompañamiento y dudas por WhatsApp'],o:'quieres iniciarte en programación o capacitar a tu equipo técnico.',g:['#4c1d95','#22d3ee'],k:'book'},
{id:'manejo-de-redes-sociales',n:'Manejo de redes sociales',t:'Impulsa tu marca en Instagram y TikTok',s:'Contenido visual, videos y publicaciones para hacer crecer tu marca.',d:'Creamos y publicamos contenido para tus redes y las conectamos con tu página y tu tienda para que conviertas seguidores en clientes.',i:['Plan de contenido mensual','Diseño de publicaciones y videos cortos','Publicación y atención de mensajes','Reporte mensual de resultados'],o:'quieres presencia constante en redes pero no tienes tiempo de manejarlas.',g:['#be185d','#f59e0b'],k:'share'}];
var P=[
{n:'Gestión de actos de grado y cobros',c:'Educación y servicios',p:'Los pagos y la organización de los actos de grado se llevaban en papel y mensajes sueltos.',h:['Registro de graduandos y control de pagos','Panel para el equipo organizador','Reportes claros de ingresos'],r:'Menos errores de cobro y un control total de cada acto.',g:['#1d4ed8','#22d3ee'],k:'pen'},
{n:'Plataforma de entradas con app de validación QR',c:'Entretenimiento',p:'La venta de entradas y el control de acceso eran lentos y difíciles de verificar.',h:['Venta de entradas en línea','App móvil que valida el código QR en la puerta','Panel de asistencia en tiempo real'],r:'Acceso ágil en el evento y cero entradas duplicadas.',g:['#6d28d9','#3b82f6'],k:'mob'},
{n:'Tienda en línea y panel administrativo',c:'Comercio y regalos',p:'Los pedidos por redes sociales desorganizaban las ventas y complicaban la caja diaria.',h:['Catálogo con carrito y pagos','Panel de pedidos e inventario','Reportes para administrar el negocio'],r:'Orden total en los pedidos y una tienda abierta las 24 horas.',g:['#be185d','#b45309'],k:'shop'}];
var T=[['AM','Ana M.','Dirección general','Lidera la estrategia y el trato con cada cliente.'],['CR','Carlos R.','Tecnología y backend','Diseña la arquitectura y los sistemas a medida.'],['LS','Laura S.','Diseño UI/UX','Convierte procesos complejos en pantallas simples.'],['JP','Jorge P.','DevOps y soporte','Mantiene todo en línea, seguro y respaldado.']];
var $=function(i){return document.getElementById(i)};
// tarjetas de servicios
function card(s,i){return '<a class="sc rv" href="#servicio-'+s.id+'" style="--g1:'+s.g[0]+';--g2:'+s.g[1]+'"><span class="ico">'+sv(s.k)+'</span><em class="nm">'+(i<9?'0':'')+(i+1)+'</em><h3>'+s.n+'</h3><small>'+s.t+'</small><p>'+s.s+'</p><b>Conocer más <i>→</i></b></a>'}
function cards(n){return S.slice(0,n||S.length).map(card).join('')}
$('sg').innerHTML=cards(8);
var G=[['Software y presencia web','Lo que construimos para que tu empresa funcione y venda en línea.',[0,1,2,3,4,5,6]],['Soporte y equipos','Tecnología en orden: te ayudamos a distancia o en tu oficina.',[7,8,9]],['Crecimiento y formación','Para que tu marca y tu equipo sigan avanzando.',[10,11]]];
$('grp').innerHTML=G.map(function(g){return '<div class="gp"><div class="gh rv"><h2>'+g[0]+'</h2><p>'+g[1]+'</p></div><div class="sg">'+g[2].map(function(k){return card(S[k],k)}).join('')+'</div></div>'}).join('');
$('fs').innerHTML=S.slice(0,5).map(function(s){return '<li><a href="#servicio-'+s.id+'">'+s.n+'</a></li>'}).join('')+'<li><a href="#servicios">Ver todos →</a></li>';
$('t').innerHTML=S.map(function(s){return '<option>'+s.n+'</option>'}).join('')+'<option>Otro / aún no lo sé</option>';
$('pjs').innerHTML='<div class="w">'+P.map(function(p,j){return '<div class="dt pjc'+(j%2?' rev':'')+' rv" style="margin-bottom:28px"><div class="art" style="--g1:'+p.g[0]+';--g2:'+p.g[1]+'"><i></i><i></i><i></i>'+sv(p.k)+'</div><div><small style="color:var(--link);font-weight:500">'+p.c+'</small><h2>'+p.n+'</h2><h3 style="font-size:1rem;margin:16px 0 4px">El problema</h3><p style="margin:0">'+p.p+'</p><h3 style="font-size:1rem;margin:16px 0 0">Lo que hicimos</h3><ul class="ck">'+p.h.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul><h3 style="font-size:1rem;margin:0 0 4px">Resultados</h3><p style="margin:0 0 18px">'+p.r+'</p><a class="btn c" href="#cotizar">Quiero un proyecto así</a></div></div>'}).join('')+'</div>';
$('tm').innerHTML=T.map(function(m,j){return '<div class="cd tm rv d'+j+'"><div class="av">'+m[0]+'</div><h3>'+m[1]+'</h3><small>'+m[2]+'</small><p>'+m[3]+'</p></div>'}).join('');
// página de servicio
function page(s){
  var gs='--g1:'+s.g[0]+';--g2:'+s.g[1],rest=S.filter(function(x){return x!==s});
  $('v-servicio').innerHTML='<section class="ph dk"><div class="w sh" style="'+gs+'"><span class="big-i">'+sv(s.k)+'</span><div><div class="bc"><a href="#inicio">Inicio</a> / <a href="#servicios">Servicios</a> / '+s.n+'</div><h1>'+s.n+'</h1><p>'+s.t+'</p></div></div></section>'+
  '<section class="sec"><div class="w sp2"><div class="main"><p class="intro rv">'+s.d+'</p>'+
  '<h3 class="mh">Qué incluye</h3><div class="fx">'+s.i.map(function(x,j){return '<div class="fe rv d'+(j%4)+'"><b>0'+(j+1)+'</b><span>'+x+'</span></div>'}).join('')+'</div>'+
  '<h3 class="mh">Cómo lo hacemos</h3><ol class="s3"><li class="rv"><b>Diagnóstico</b><span>Entendemos tu negocio y lo que necesitas.</span></li><li class="rv d1"><b>Desarrollo</b><span>Lo construimos y te mostramos avances.</span></li><li class="rv d2"><b>Entrega y soporte</b><span>Lo lanzamos, te capacitamos y te acompañamos 24/7.</span></li></ol>'+
  '<div class="id rv"><b>Ideal si</b> '+s.o+'</div></div>'+
  '<aside class="asd"><div class="ah" style="'+gs+'">'+sv(s.k)+'<span>'+s.n+'</span></div><div class="ab"><p>Cuéntanos tu caso y recibe un presupuesto sin compromiso.</p><a class="btn c" href="#cotizar">Cotizar este servicio</a><a class="btn g" href="https://wa.me/'+WA+'" target="_blank" rel="noopener">Hablar por WhatsApp</a><a class="lk" href="#contacto">Solicitar diagnóstico gratis →</a></div></aside></div></section>'+
  '<section class="sec related-services"><div class="w"><div class="eb rv">Otros servicios</div><h2 class="rv">Más soluciones para tu empresa</h2><p class="lead rv">Explora otros servicios y encuentra la opción adecuada para tu negocio.</p><div class="sg">'+rest.map(function(x){return card(x,S.indexOf(x))}).join('')+'</div></div></section>';
}
// observador: revelar y contar
var io=null;
function count(el){var t=+el.dataset.n,st=null;function f(ts){st=st||ts;var p=Math.min((ts-st)/1400,1);el.textContent=Math.round(t*p)+(p===1?'+':'');if(p<1)requestAnimationFrame(f)}rm?(el.textContent=t+'+'):requestAnimationFrame(f)}
if('IntersectionObserver' in window){io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;if(e.target.dataset.n)count(e.target);else e.target.classList.add('in');io.unobserve(e.target)})},{threshold:.15})}
function watch(root){root.querySelectorAll('.rv:not(.in),[data-n]').forEach(function(x){if(io&&!rm)io.observe(x);else if(x.dataset.n)count(x);else x.classList.add('in')})}
// rutas por hash (cada "página" es una vista)
var views=document.querySelectorAll('.view'),titles={inicio:'Inicio',servicios:'Servicios',proyectos:'Proyectos',cotizar:'Cotizar',nosotros:'Nosotros',contacto:'Contacto'};
function route(){
  var h=(location.hash||'#inicio').slice(1),sel=null,id;
  if(h.indexOf('servicio-')===0){sel=S.filter(function(s){return 'servicio-'+s.id===h})[0]}
  if(sel){id='servicio';page(sel)}else{id=titles[h]?h:'inicio'}
  views.forEach(function(v){v.hidden=v.id!=='v-'+id});
  var cur=$('v-'+id),nav=sel?'servicios':id;
  document.querySelectorAll('nav a').forEach(function(a){a.dataset.p===nav?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});
  document.title=(sel?sel.n:titles[id])+' | Likecode Software Agency';
  window.scrollTo(0,0);watch(cur);vplay(id);
}
window.addEventListener('hashchange',route);
var mb=document.querySelector('.menu'),nv=$('nav'),scr=$('scrim'),mtx=mb.querySelector('.mtx');
function menu(o){nv.classList.toggle('open',o);scr.classList.toggle('on',o);mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú');mtx.textContent=o?'Cerrar':'Menú'}
mb.onclick=function(){menu(!nv.classList.contains('open'))};
nv.onclick=function(e){if(e.target.closest('a'))menu(false)};
scr.onclick=function(){menu(false)};
document.addEventListener('keydown',function(e){if(e.key==='Escape')menu(false)});
addEventListener('resize',function(){if(innerWidth>960)menu(false)});
// cotizador
var Q=[{t:'¿Qué necesitas?',k:'need',m:0,o:[['Página web','Que te encuentren en internet'],['Tienda en línea','Vender tus productos'],['Sistema a la medida','Organizar tu empresa'],['Mejorar lo que tengo','Arreglos o cambios']]},
{t:'¿Quién lo va a usar?',k:'who',m:0,o:[['Solo yo',''],['Mi equipo','De 2 a 10 personas'],['Toda la empresa','Más de 10 personas'],['Mis clientes','También lo usarán']]},
{t:'¿Qué te gustaría que haga?',k:'feat',m:1,o:[['Cobrar en línea',''],['Inventario',''],['Facturas',''],['Citas o reservas',''],['Reportes',''],['Avisos por WhatsApp','']]},
{t:'¿Para cuándo lo necesitas?',k:'when',m:0,o:[['Lo antes posible',''],['En uno o dos meses',''],['Lo estoy pensando','']]}];
var A={need:[],who:[],feat:[],when:[]},s=0,wb=$('wb'),nt=$('nt'),bk=$('bk');
function draw(){
  $('pg').style.width=Math.min((s+1)/4,1)*100+'%';
  if(s>=4){
    var sc=(A.need[0]==='Sistema a la medida'?3:A.need[0]==='Tienda en línea'?2:1)+(A.who[0]==='Toda la empresa'||A.who[0]==='Mis clientes'?1:0)+(A.feat.length>3?2:A.feat.length>1?1:0),sz=sc>=5?'Grande':sc>=3?'Mediano':'Pequeño',ft=A.feat.join(', ')||'Por definir';
    $('sp').textContent='Resumen';
    wb.innerHTML='<div class="rs"><h3>Tu cotización está lista</h3><dl><dt>Necesitas</dt><dd>'+A.need[0]+'</dd><dt>Lo usará</dt><dd>'+A.who[0]+'</dd><dt>Funciones</dt><dd>'+ft+'</dd><dt>Para cuándo</dt><dd>'+A.when[0]+'</dd></dl><p>Tamaño estimado: <span class="sz">'+sz+'</span></p><div class="row" style="margin-top:16px"><a class="btn g" target="_blank" rel="noopener" href="https://wa.me/'+WA+'?text='+encodeURIComponent('Hola, quiero cotizar: '+A.need[0]+'. Lo usará: '+A.who[0]+'. Funciones: '+ft+'. Para: '+A.when[0]+'. Tamaño estimado: '+sz+'.')+'">Enviar por WhatsApp</a><a class="btn o" href="#contacto">Usar el formulario</a></div></div>';
    nt.style.display='none';bk.textContent='Empezar de nuevo';return}
  nt.style.display='';bk.textContent='‹ Atrás';var q=Q[s];
  $('sp').textContent='Pregunta '+(s+1)+' de 4'+(q.m?' · Elige todas las que quieras':'');
  wb.innerHTML='<h3>'+q.t+'</h3><div class="op"></div>';var bx=wb.querySelector('.op');
  q.o.forEach(function(o){var b=document.createElement('button');b.type='button';b.className='ob'+(A[q.k].indexOf(o[0])>-1?' on':'');b.innerHTML=o[0]+(o[1]?'<small>'+o[1]+'</small>':'');b.setAttribute('aria-pressed',b.classList.contains('on'));
    b.onclick=function(){var i=A[q.k].indexOf(o[0]);if(q.m){i>-1?A[q.k].splice(i,1):A[q.k].push(o[0])}else{A[q.k]=[o[0]]}mark()};bx.appendChild(b)});
  nt.disabled=!q.m&&!A[q.k].length;nt.textContent=s===3?'Ver cotización':'Siguiente'}
function mark(){var q=Q[s];wb.querySelectorAll('.ob').forEach(function(b,i){var on=A[q.k].indexOf(q.o[i][0])>-1;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});nt.disabled=!q.m&&!A[q.k].length}
nt.onclick=function(){s++;draw()};
bk.onclick=function(){if(s>=4){A={need:[],who:[],feat:[],when:[]};s=0}else if(s>0){s--}draw()};
draw();
// formulario → WhatsApp
$('f').addEventListener('submit',function(e){e.preventDefault();var g=function(i){return $(i).value};window.open('https://wa.me/'+WA+'?text='+encodeURIComponent('Hola, soy '+g('n')+' ('+g('o')+'). Me interesa: '+g('t')+'. '+g('m')+' Contacto: '+g('e')+', '+g('p')),'_blank')});
// video de la portada (sin sonido)
var hv=$('hv');
if(hv&&rm){hv.removeAttribute('autoplay');hv.pause()}
function vplay(id){if(!hv||rm)return;if(id==='inicio'){var q=hv.play();if(q&&q.catch)q.catch(function(){})}else{hv.pause()}}
// pantalla de entrada: reproduce el mismo video y abre un iris
var spl=document.getElementById('splash'),ring=$('ring'),spv=$('spv');
function go(){document.body.classList.add('go')}
function endSpl(){if(spl)spl.remove();if(ring)ring.remove()}
if(rm){endSpl();go()}else{
  if(spv&&hv){spv.poster=hv.poster;spv.src=hv.querySelector('source').src;spv.playbackRate=1.4;var pq=spv.play();if(pq&&pq.catch)pq.catch(function(){})}
  setTimeout(go,3700);setTimeout(endSpl,4900);
  if(spl)spl.addEventListener('click',function(){endSpl();go()})}
route();
})();
