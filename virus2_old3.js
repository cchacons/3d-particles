var renderer	= new THREE.WebGLRenderer({
	antialias	: true
});
renderer.setClearColor( 0x070912 );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var container, stats;
var camera, scene, renderer, particles, geometry, geometry2, i, h, color, sprite, size;
var mouseX = 0, mouseY = 0;
var p = [];
var vl = [];
var vt;
var vertices = [];
var vertex = [];

var vertices_tmp = [];
var animVertices = [];
var geom = [];
var VertArray = [];
var ObjArray = [];
var material = [];
var Objects = [];
var delta = 0;
var newpoint = 60;
var cubev = [];
var cvl;
var vel =[];
var j = 0;
var kx = [],ky = [], kz = [];
var dt = 10000;
var rs;


var n = 30;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var scene	= new THREE.Scene();
//scene.fog = new THREE.FogExp2( 0x000000, 0.01 );
var camera	= new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 2, 10000);

camera.position.z = 140;
camera.position.y = 30;

window.addEventListener( 'resize', function() {
	var w = window.innerWidth,
		h = window.innerHeight;

	camera.aspect = w / h;
	camera.updateProjectionMatrix();

	renderer.setSize( w, h );
}, false );

THREE.DefaultLoadingManager.onProgress = function ( item, loaded, total ) {

	console.log( item, loaded, total );

};
//////////////////////////////////////////////////////////////////////////////////
//		Camera Controls							//
//////////////////////////////////////////////////////////////////////////////////

	controls = new THREE.OrbitControls( camera );
	controls.update();

//////////////////////////////////////////////////////////////////////////////////
//		LIGHTS									//
//////////////////////////////////////////////////////////////////////////////////

	// add a ambient light
	var light	= new THREE.AmbientLight( 0xffffff )
	scene.add( light )
	// add a light in front
	var light	= new THREE.DirectionalLight('white', 1)
	light.position.set(-50, 50, 50)
	scene.add( light )
	// add a light behind
	var light	= new THREE.DirectionalLight('white', 0.75)
	light.position.set(-0.5, -0.5, -2)
	scene.add( light )		

//////////////////////////////////////////////////////////////////////////////////
//		MEGA LOADER								//
//////////////////////////////////////////////////////////////////////////////////

	var urls	= ['obj/k_low.obj', 'obj/FinalBaseMesh.obj']

	sprite = THREE.ImageUtils.loadTexture( "tex/disc.png" );

	var loader	= new THREEx.UniversalLoader()
	for (var n = 0; n < urls.length; n++) {
		
			loader.load(urls[n], function(object3d){

				object3d.traverse( function ( child ) {

				    if ( child.geometry !== undefined ) {

						geom[n] = child.geometry;

						vertices[n] = geom[n].vertices;
						vl[n] = vertices[n].length;

						ObjArray[n] = new THREE.Geometry();

						for ( i = 0; i < vl[n]; i ++ ) {

							vertex[n] = new THREE.Vector3();
							vertex[n].x = vertices[n][i].x;
							vertex[n].y = vertices[n][i].y;
							vertex[n].z = vertices[n][i].z;

							ObjArray[n].vertices.push( vertex[n] );

						}

						material[n] = new THREE.PointCloudMaterial( { size: 4, sizeAttenuation: false, map: sprite, alphaTest: 0.5, transparent: true } );
						material[n].color.setHSL( Math.random()*0.2+0.3, 1, 0.3 );

						Objects[n] = new THREE.PointCloud( ObjArray[n], material[n] );
						scene.add(Objects[n]);
				    }

				} );

				//scene.add(object3d);
			})

	};

//////////////////////////////////////////////////////////////////////////////////
//		APP										//
//////////////////////////////////////////////////////////////////////////////////


	/*

				if (i < Math.min(pmesh.geometry.vertices.length, vl)) {

					rs = 1;
					kx[i] =  (vertices[i].x - pmesh.geometry.vertices[i].x)/n*rs;
					ky[i] =  (vertices[i].y - pmesh.geometry.vertices[i].y)/n*rs;
					kz[i] =  (vertices[i].z - pmesh.geometry.vertices[i].z)/n*rs;
					console.log(kx[i], i, rs);

				}*/
	
	var pgeom = new THREE.SphereGeometry (60,30,30);
	var pmat = new THREE.PointCloudMaterial( { size: 4, sizeAttenuation: false, map: sprite, alphaTest: 0.5, transparent: true } );
	//pmat.color.setHSL( 0.57, 1, 0.7 );
	pmat.color.setHSL( 0.77, 1, 0.7 );
	var pmesh = new THREE.PointCloud( pgeom, pmat );
	scene.add(pmesh);		


	var tmp;

	tmp = pmesh;

	for (var i = tmp.geometry.vertices.length - 1; i >= 0; i--) {
		vel[i] = 0;
	}




	//////////////////////////////////////////////////////////////////////////////////
	//		Additional Controls						//
	//////////////////////////////////////////////////////////////////////////////////


	$('#home').click(function() {
		//tmp = pmesh;
	});

	$('#info').click(function() {
		//tmp = Objects[0];
	});

	$('#projects').click(function() {
		//tmp = Objects[1];
	});

	$('#team').click(function() {
		//tmp = Objects[2];
	});

	$('#news').click(function() {
		//tmp = Objects[3];
	});

	$('.navi').click(function() {
		dt = 0;
		/*for (var i = tmp.geometry.vertices.length - 1; i >= 0; i--) {
			vel[i] = Math.random()*1+1;
		}*/
		for (var n = 0; n < Objects.length; n++) {
			console.log(Objects[n],urls.length);
		}
	});
	/*particles2.on('click', function(){
	    particles2.scale.x *= 2;
	});*/

	//////////////////////////////////////////////////////////////////////////////////
	//		RENDER						//
	//////////////////////////////////////////////////////////////////////////////////

	animate();
	function animate() {

	requestAnimationFrame( animate );

		/*for (var n = 0; n < Objects.length; n++) {
			Objects[n].geometry.verticesNeedUpdate = true;
		}*/

		//console.log(tmp.geometry.vertices.length, tmp.geometry.vertices[1].y);

		//console.log(tmp);

		//tmp.geometry.verticesNeedUpdate = true;
		dt += 1;

		//

		/*if (dt < n) {

			for (var i = pmesh.geometry.vertices.length - 1; i >= 0; i--) {
				pmesh.geometry.vertices[i].x += kx[i];
				pmesh.geometry.vertices[i].y += ky[i];
				pmesh.geometry.vertices[i].z += kz[i];	
				}
		}*/


		

		/*for (var i = tmp.geometry.vertices.length - 1; i >= 0; i--) {
			if (tmp.geometry.vertices[i].y > -50){
				tmp.geometry.vertices[i].y -= vel[i];
			}
		}*/

		
	renderer.render( scene, camera );
	}