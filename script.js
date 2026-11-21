
(function(){
var WA='584141682547',rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
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
var T=[
{initials:'EH',name:'Eduardo Hernandez',linkedin:'https://linkedin.com/in/eduardo-hern%C3%A1ndez-459085263',github:'https://github.com/eduardojhp12-a11y'},
{initials:'DM',name:'Daniel Marin',linkedin:'https://www.linkedin.com/in/danielmarindev',github:'https://github.com/daniel-devfrontend'},
{placeholder:true},{placeholder:true}
];
var $=function(i){return document.getElementById(i)};
document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function(a){var q=a.href.indexOf('?');a.href='https://wa.me/'+WA+(q>-1?a.href.slice(q):'')});
// ubicación de la agencia (mapa de Google): cambia solo esta línea por la dirección real
var LOC='J98J+X3J, Maracaibo 4001, Zulia, Venezuela';
var MAIL='Likecode429@gmail.com'; // correo que recibe las cotizaciones y mensajes
function gmail(su,body){return 'https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(MAIL)+(su?'&su='+encodeURIComponent(su):'')+(body?'&body='+encodeURIComponent(body):'')}
$('hg').href=gmail('Consulta desde la web');
(function(){var q=encodeURIComponent(LOC);$('lm').src='https://www.google.com/maps?q='+q+'&output=embed';$('ld').href='https://www.google.com/maps/search/?api=1&query='+q;$('la').textContent=LOC})();
// tarjetas de servicios
function card(s,i){return '<a class="sc rv" href="#servicio-'+s.id+'" style="--g1:'+s.g[0]+';--g2:'+s.g[1]+'"><span class="ico">'+sv(s.k)+'</span><em class="nm">'+(i<9?'0':'')+(i+1)+'</em><h3>'+s.n+'</h3><small>'+s.t+'</small><p>'+s.s+'</p><b>Conocer más <i>→</i></b></a>'}
function cards(n){return S.slice(0,n||S.length).map(card).join('')}
$('sg').innerHTML=cards(8);
var G=[['Software y presencia web','Lo que construimos para que tu empresa funcione y venda en línea.',[0,1,2,3,4,5,6]],['Soporte y equipos','Tecnología en orden: te ayudamos a distancia o en tu oficina.',[7,8,9]],['Crecimiento y formación','Para que tu marca y tu equipo sigan avanzando.',[10,11]]];
$('grp').innerHTML=G.map(function(g){return '<div class="gp"><div class="gh rv"><h2>'+g[0]+'</h2><p>'+g[1]+'</p></div><div class="sg">'+g[2].map(function(k){return card(S[k],k)}).join('')+'</div></div>'}).join('');
$('fs').innerHTML=S.slice(0,5).map(function(s){return '<li><a href="#servicio-'+s.id+'">'+s.n+'</a></li>'}).join('')+'<li><a href="#servicios">Ver todos →</a></li>';
$('t').innerHTML=S.map(function(s){return '<option>'+s.n+'</option>'}).join('')+'<option>Otro / aún no lo sé</option>';
$('pjs').innerHTML='<div class="w">'+P.map(function(p,j){return '<div class="dt pjc'+(j%2?' rev':'')+' rv" style="margin-bottom:28px"><div class="art" style="--g1:'+p.g[0]+';--g2:'+p.g[1]+'"><i></i><i></i><i></i>'+sv(p.k)+'</div><div><small style="color:var(--link);font-weight:500">'+p.c+'</small><h2>'+p.n+'</h2><h3 style="font-size:1rem;margin:16px 0 4px">El problema</h3><p style="margin:0">'+p.p+'</p><h3 style="font-size:1rem;margin:16px 0 0">Lo que hicimos</h3><ul class="ck">'+p.h.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul><h3 style="font-size:1rem;margin:0 0 4px">Resultados</h3><p style="margin:0 0 18px">'+p.r+'</p><a class="btn c" href="#cotizar">Quiero un proyecto así</a></div></div>'}).join('')+'</div>';
$('tm').innerHTML=T.map(function(m,j){return '<div class="cd tm rv d'+j+(m.placeholder?' tm-placeholder':'')+'"><div class="av">'+(m.initials||'…')+'</div><h3>'+(m.name||'Integrante del equipo')+'</h3>'+(m.placeholder?'':'<div class="tm-social"><a class="btn o" href="'+m.linkedin+'" target="_blank" rel="noopener noreferrer">LinkedIn</a><a class="btn o" href="'+m.github+'" target="_blank" rel="noopener noreferrer">GitHub</a></div>')+'</div>'}).join('');
// página de servicio
function page(s){
  var gs='--g1:'+s.g[0]+';--g2:'+s.g[1],rest=S.filter(function(x){return x!==s});
  $('v-servicio').innerHTML='<section class="ph dk"><div class="w sh" style="'+gs+'"><span class="big-i">'+sv(s.k)+'</span><div><div class="bc"><a href="#inicio">Inicio</a> / <a href="#servicios">Servicios</a> / '+s.n+'</div><h1>'+s.n+'</h1><p>'+s.t+'</p></div></div></section>'+
  '<section class="sec"><div class="w sp2"><div class="main"><p class="intro rv">'+s.d+'</p>'+
  '<h3 class="mh">Qué incluye</h3><div class="fx">'+s.i.map(function(x,j){return '<div class="fe rv d'+(j%4)+'"><b>0'+(j+1)+'</b><span>'+x+'</span></div>'}).join('')+'</div>'+
  '<h3 class="mh">Cómo lo hacemos</h3><ol class="s3"><li class="rv"><b>Diagnóstico</b><span>Entendemos tu negocio y lo que necesitas.</span></li><li class="rv d1"><b>Desarrollo</b><span>Lo construimos y te mostramos avances.</span></li><li class="rv d2"><b>Entrega y soporte</b><span>Lo lanzamos, te capacitamos y te acompañamos 24/7.</span></li></ol>'+
  '<div class="id rv"><b>Ideal si</b> '+s.o+'</div></div>'+
  '<aside class="asd"><div class="ah" style="'+gs+'">'+sv(s.k)+'<span>'+s.n+'</span></div><div class="ab"><p>Cuéntanos tu caso y recibe un presupuesto sin compromiso.</p><a class="btn c" href="#cotizar" data-svc="'+s.id+'">Cotizar este servicio</a><a class="btn g" href="https://wa.me/'+WA+'" target="_blank" rel="noopener">Hablar por WhatsApp</a><a class="lk" href="#contacto">Solicitar diagnóstico gratis →</a></div></aside></div></section>'+
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
// cotizador: se elige UN servicio y las preguntas siguientes son solo de ese servicio
var SN=S.map(function(x){return x.n});
function ops(a){return a.map(function(x){return typeof x==='string'?[x,'']:x})}
function st(k,l,t,m,o,z){return {k:k,l:l,t:t,m:m,sz:z,h:m?' · Elige todas las que quieras':'',o:ops(o)}}
var BASE=st('base','Punto de partida','¿Ya tienes algo hecho?',0,[['No, empiezo desde cero','Es un proyecto nuevo'],['Sí, quiero mejorarlo','Ya tengo algo funcionando']]),
WHEN=st('when','Para cuándo','¿Para cuándo lo necesitas?',0,['Lo antes posible','En uno o dos meses','Lo estoy pensando']),
URG=st('when','Urgencia','¿Qué tan urgente es?',0,['Hoy mismo','Esta semana','No es urgente']),
PEOPLE=['1 a 5 personas','6 a 20 personas','21 a 50 personas','Más de 50 personas'];
// w = peso base del servicio · e = muestra "tamaño estimado" · s = preguntas propias del servicio
var F={
'Páginas web':{w:1,e:1,s:[st('type','Tipo de página','¿Qué tipo de página necesitas?',0,[['Página de presentación','Da a conocer tu empresa'],['Página con varias secciones','Inicio, servicios, nosotros y contacto'],['Promoción o producto','Una sola página para vender algo'],['Portafolio o catálogo','Muestra tus trabajos o productos']]),st('incl','Incluye','¿Qué quieres que incluya?',1,['Botón de WhatsApp','Formulario de contacto','Aparecer en Google','Dominio y hosting','Mapa de ubicación','Galería de fotos y videos','Blog o noticias','Varios idiomas']),BASE,WHEN]},
'Tiendas en línea':{w:2,e:1,s:[st('prod','Productos','¿Cuántos productos venderás?',0,['Menos de 20','Entre 20 y 100','Más de 100'],1),st('incl','Incluye','¿Qué necesita tu tienda?',1,['Pagos en línea','Catálogo con categorías','Inventario','Panel de pedidos y clientes','Avisos de venta por WhatsApp o correo','Cupones y descuentos','Envíos y delivery']),BASE,WHEN]},
'Desarrollo personalizado':{w:3,e:1,s:[st('incl','Incluye','¿Qué necesita tu sistema?',1,['Usuarios y permisos','Reportes a tu medida','Facturación','Conexión con otros sistemas','Acceso para mis clientes','Capacitación para mi equipo']),st('users','Usuarios','¿Cuántas personas lo usarán?',0,PEOPLE,1),BASE,WHEN]},
'Sistemas administrativos':{w:3,e:1,s:[st('incl','Qué controlar','¿Qué quieres controlar?',1,['Facturación y cobros','Cuentas por pagar','Inventario','Compras','Clientes (CRM)','Reportes e indicadores']),st('users','Usuarios','¿Cuántas personas lo usarán?',0,PEOPLE,1),st('base','Control actual','¿Cómo llevas el control hoy?',0,['En papel o Excel','Con otro sistema que quiero cambiar','Todavía no llevo control']),WHEN]},
'Apps móviles':{w:3,e:1,s:[st('plat','Plataforma','¿Para qué celulares?',0,['Android','iPhone (iOS)','Los dos']),st('incl','Incluye','¿Qué debe tener tu app?',1,['Notificaciones','Funcionar sin internet','Conexión con mi sistema web','Pagos dentro de la app','Inicio de sesión de usuarios','Publicación en App Store y Google Play']),BASE,WHEN]},
'Diseño UI/UX':{w:1,e:1,s:[st('what','Qué diseñar','¿Qué necesitas diseñar?',0,['Una página web','Una app móvil','Un sistema o panel','Rediseñar algo que ya tengo']),st('incl','Incluye','¿Qué necesitas que incluya?',1,['Prototipos navegables','Pruebas con usuarios reales','Identidad y sistema de diseño','Pantallas listas para programar']),WHEN]},
'Cloud, APIs e IA':{w:2,e:1,s:[st('incl','Incluye','¿Qué necesitas?',1,['Servidores en la nube y copias de seguridad','Conexión con pagos','Conexión con facturación','Conexión con WhatsApp','Asistente con IA para atender clientes','Monitoreo y alertas 24/7']),st('base','Punto de partida','¿Ya tienes sistemas funcionando?',0,[['Sí, quiero conectarlos','Ya uso sistemas o herramientas'],['No, es un proyecto nuevo','Empiezo desde cero']]),WHEN]},
'Soporte técnico remoto':{w:0,e:0,s:[st('incl','Ayuda con','¿Con qué necesitas ayuda?',1,['Instalar o configurar programas','Eliminar virus y limpiar el sistema','Mis sistemas administrativos','Otro problema con mi equipo']),st('freq','Frecuencia','¿Cómo lo necesitas?',0,[['Una sola vez','Resolver un problema puntual'],['De forma continua','Soporte frecuente para mi empresa']]),URG]},
'Mantenimiento de equipos':{w:0,e:0,s:[st('incl','Mantenimiento','¿Qué necesitas?',1,['Limpieza interna y cambio de pasta térmica','Formateo y reinstalación del sistema','Reparación o cambio de piezas','Revisión preventiva periódica']),st('eq','Equipos','¿Qué equipos son?',1,['Laptops','Computadoras de escritorio','Impresoras','Servidores']),st('qty','Cantidad','¿Cuántos equipos son?',0,['1 equipo','De 2 a 5','De 6 a 20','Más de 20']),URG]},
'Redes y equipos':{w:1,e:1,s:[st('incl','Incluye','¿Qué necesita tu oficina?',1,['Cableado y wifi','Configurar computadoras, servidores e impresoras','Protección contra virus y accesos no autorizados','Revisión y mantenimiento periódico']),st('size','Puestos de trabajo','¿Cuántos puestos de trabajo tiene?',0,['1 a 5','6 a 20','21 a 50','Más de 50'],1),st('base','Punto de partida','¿Es una oficina nueva?',0,[['Sí, es nueva','Empezamos la red desde cero'],['No, quiero mejorar la que tengo','Ya tenemos red o equipos']]),WHEN]},
'Cursos de programación':{w:0,e:0,s:[st('level','Nivel','¿Cuál es tu nivel?',0,[['Nunca he programado','Empiezo desde cero'],['Sé un poco','Ya probé por mi cuenta'],['Quiero llegar a nivel intermedio','Ya tengo bases']]),st('who','Quién estudia','¿Quién va a estudiar?',0,['Solo yo','Un grupo pequeño','Mi equipo de trabajo']),st('sched','Horario','¿Qué horario prefieres?',1,['Mañana','Tarde','Noche','Fines de semana']),st('when','Inicio','¿Cuándo quieres empezar?',0,['Lo antes posible','En uno o dos meses','Lo estoy pensando'])]},
'Manejo de redes sociales':{w:0,e:0,s:[st('nets','Redes','¿Qué redes quieres manejar?',1,['Instagram','TikTok','Facebook','Otra red']),st('incl','Incluye','¿Qué necesitas?',1,['Plan de contenido mensual','Diseño de publicaciones y videos cortos','Publicación y atención de mensajes','Reporte mensual de resultados']),st('base','Punto de partida','¿Ya tienes redes activas?',0,[['No, empiezo desde cero','Quiero crear mi presencia'],['Sí, quiero mejorarlas','Ya publico pero sin resultados']]),WHEN]},
'Quiero asesoría':{w:0,e:0,s:[st('topic','Tema','¿Sobre qué quieres asesoría?',0,[['Presencia en internet','Página web o tienda en línea'],['Ordenar mi negocio','Sistemas, apps y automatización'],['Equipos y redes','Soporte, mantenimiento o red de oficina'],['Redes sociales o formación','Contenido, marca o cursos']]),st('size','Empresa','¿De qué tamaño es tu empresa?',0,[['Soy independiente','Trabajo por mi cuenta'],['Empresa pequeña','De 2 a 10 personas'],['Empresa mediana','De 11 a 50 personas'],['Empresa grande','Más de 50 personas']]),WHEN]}
};
var SVC={k:'svc',l:'Servicio',t:'¿Qué servicio necesitas?',m:0,h:' · Elige uno',g:G.map(function(g){return [g[0],g[2].map(function(i){return [S[i].n,S[i].t]})]}).concat([['¿No sabes por dónde empezar?',[['Quiero asesoría','Te ayudamos a elegir']]]])};
function fresh(){return {svc:[]}}
var A=fresh(),s=0,wb=$('wb'),nt=$('nt'),bk=$('bk'),wz=document.querySelector('.wz');
function steps(){return A.svc.length?[SVC].concat(F[A.svc[0]].s):[SVC]}
function flat(q){return q.g?q.g.reduce(function(a,g){return a.concat(g[1])},[]):q.o}
function got(q){return A[q.k]||[]}
function ok(q){return got(q).length>0}
function last(L){return A.svc.length>0&&s===L.length-1}
function head(L){var q=L[s],n=A.svc.length?L.length:5;$('pg').style.width=Math.min((s+1)/n,1)*100+'%';$('sp').textContent='Pregunta '+(s+1)+(A.svc.length?' de '+L.length:'')+(q.h||'')}
function draw(){
  var L=steps(),n=L.length;
  $('pg').style.width=Math.min((s+1)/n,1)*100+'%';
  bk.style.visibility=s===0?'hidden':'';
  if(s>=n){
    var f=F[A.svc[0]],rows=[[SVC.l,A.svc[0]]].concat(L.slice(1).map(function(q){return [q.l,got(q).join(', ')]})),sc=f.w,pk=0;
    L.slice(1).forEach(function(q){var g=got(q);if(q.sz)sc+=Math.round(q.o.map(function(x){return x[0]}).indexOf(g[0])*2/(q.o.length-1));else if(q.m)pk+=g.length});
    sc+=pk>5?2:pk>2?1:0;
    var sz=f.e?(sc>=7?'Grande':sc>=3?'Mediano':'Pequeño'):'',
    msg=(A.svc[0]==='Quiero asesoría'?'Hola, quiero pedir asesoría. ':'Hola, quiero cotizar: '+A.svc[0]+'. ')+rows.slice(1).map(function(r){return r[0]+': '+r[1]}).join('. ')+'.'+(sz?' Tamaño estimado: '+sz+'.':'');
    var intro=A.svc[0]==='Quiero asesoría'?'Hola, quiero pedir asesoría.':'Hola, quiero cotizar el servicio de '+A.svc[0]+'.',
    body=intro+'\n\n'+rows.slice(1).map(function(r){return r[0]+': '+r[1]}).join('\n')+(sz?'\n\nTamaño estimado: '+sz:'')+'\n\nQuedo atento a su respuesta. Gracias.',
    gm=gmail(A.svc[0]==='Quiero asesoría'?'Solicitud de asesoría':'Cotización: '+A.svc[0],body);
    $('sp').textContent='Resumen';
    wb.innerHTML='<div class="rs"><h3>Tu cotización está lista</h3><dl>'+rows.map(function(r){return '<dt>'+r[0]+'</dt><dd>'+r[1]+'</dd>'}).join('')+'</dl>'+(sz?'<p>Tamaño estimado: <span class="sz">'+sz+'</span></p>':'')+'<div class="row" style="margin-top:16px"><a class="btn g" target="_blank" rel="noopener" href="https://wa.me/'+WA+'?text='+encodeURIComponent(msg)+'">Enviar por WhatsApp</a><a class="btn c" target="_blank" rel="noopener" href="'+gm+'">Enviar por Gmail</a><a class="btn o" href="#contacto">Usar el formulario</a></div></div>';
    nt.style.display='none';bk.textContent='Empezar de nuevo';return}
  nt.style.display='';bk.textContent='‹ Atrás';var q=L[s];head(L);
  wb.innerHTML='<h3>'+q.t+'</h3><div class="op"></div>';var bx=wb.querySelector('.op');
  function add(o){var b=document.createElement('button');b.type='button';b.className='ob'+(got(q).indexOf(o[0])>-1?' on':'');b.innerHTML=o[0]+(o[1]?'<small>'+o[1]+'</small>':'');b.setAttribute('aria-pressed',b.classList.contains('on'));
    b.onclick=function(){var g=got(q).slice(),i=g.indexOf(o[0]);if(q.m){i>-1?g.splice(i,1):g.push(o[0]);A[q.k]=g}else{if(q.k==='svc'&&A.svc[0]!==o[0])A=fresh();A[q.k]=[o[0]]}mark()};bx.appendChild(b)}
  if(q.g){q.g.forEach(function(g){var h=document.createElement('p');h.className='gt';h.textContent=g[0];bx.appendChild(h);g[1].forEach(add)})}else{q.o.forEach(add)}
  nt.disabled=!ok(q);nt.textContent=last(L)?'Ver cotización':'Siguiente'}
function mark(){var L=steps(),q=L[s],o=flat(q);head(L);wb.querySelectorAll('.ob').forEach(function(b,i){var on=got(q).indexOf(o[i][0])>-1;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});nt.disabled=!ok(q);nt.textContent=last(L)?'Ver cotización':'Siguiente'}
function up(){var r=wz.getBoundingClientRect();if(r.top<90)window.scrollTo({top:scrollY+r.top-110,behavior:rm?'auto':'smooth'})}
nt.onclick=function(){s++;draw();up()};
bk.onclick=function(){if(s>=steps().length){A=fresh();s=0}else if(s>0){s--}draw();up()};
draw();
// "Cotizar este servicio" abre el cotizador con ese servicio ya elegido
$('v-servicio').addEventListener('click',function(e){var a=e.target.closest('[data-svc]');if(!a)return;var x=S.filter(function(v){return v.id===a.dataset.svc})[0];if(x){A=fresh();A.svc=[x.n];s=0;draw()}});
// formulario → WhatsApp
$('f').addEventListener('submit',function(e){e.preventDefault();var g=function(i){return $(i).value};window.open('https://wa.me/'+WA+'?text='+encodeURIComponent('Hola, soy '+g('n')+' ('+g('o')+'). Me interesa: '+g('t')+'. '+g('m')+' Contacto: '+g('e')+', '+g('p')),'_blank')});
// formulario → Gmail
$('fg').addEventListener('click',function(){if(!$('f').reportValidity())return;var g=function(i){return $(i).value};window.open(gmail('Contacto: '+g('t'),'Hola, soy '+g('n')+' ('+g('o')+').\n\nMe interesa: '+g('t')+'\n\n'+g('m')+'\n\nMis datos de contacto:\nCorreo: '+g('e')+'\nTeléfono: '+g('p')),'_blank','noopener')});
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
