// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'The Bathtruck',
  	routes: [
	{
	path: '/perfildemascotas/',
    url: 'index.html',
    name: 'perfildemascotas',
  	},
	{
	path: '/serv/',
    url: 'serv.html',
    name: 'servicios',
  	},
	{
	path: '/zonas/',
    url: 'zonas.html',
    name: 'zonas',
  	},
	{
	path: '/perfilpersonal/',
	url:'registro.html',
	name: 'perfilpersonal',
			
	},
	{
	path: '/info/',
	url: 'quienes somos.html',
	name: 'info',
	},
		
	],
	dialog: {
		title: 'RunGran Shop',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});