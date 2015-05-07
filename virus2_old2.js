var renderer	= new THREE.WebGLRenderer({
	antialias	: true
});
renderer.setClearColor( 0x070912 );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var container, stats;
var camera, scene, renderer, particles, geometry, geometry2, material, i, h, color, sprite, size;
var mouseX = 0, mouseY = 0;
var p = [];
var vl = 10;
var vt;
var vertices = [];
var vertices2 = [];
var vertices_tmp = [];
var animVertices = [];
var geom = [];
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

var onRenderFcts= [];
var scene	= new THREE.Scene();
//scene.fog = new THREE.FogExp2( 0x000000, 0.01 );
var camera	= new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 2, 10000);
camera.position.z = 140;
//camera.position.x = 40;
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
/*
    //initialize the manager to handle all loaded events (currently just works for OBJ and image files)
    manager = new THREE.LoadingManager();

    manager.onProgress = function (item, loaded, total) {
        console.log(item, loaded, total);
    };
    manager.onLoad = function () {
        console.log('all items loaded');
    };
    manager.onError = function () {
        console.log('there has been an error');
    };
*/
//////////////////////////////////////////////////////////////////////////////////
//		set 3 point lighting						//
//////////////////////////////////////////////////////////////////////////////////

;(function(){
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
})()



//////////////////////////////////////////////////////////////////////////////////
//		Comment								//
//////////////////////////////////////////////////////////////////////////////////

var urls	= []
//var urls	= 'models/stl/ascii/pr2_head_pan.stl'
//var urls	= 'models/collada/monster/monster.dae'
// var urls	= 'models/Suzanne.js'
// var urls	= 'obj/tree/tree.js'
//var urls	= 'obj/smb.obj'
//urls	= 'obj/k_low.obj'
urls	= 'obj/FinalBaseMesh.obj'
//urls	= 'obj/MaleLow.obj'
// var urls	= 'obj/female02/female02.obj'
// var urls	= ['obj/female02/female02.mtl', 'obj/female02/female02.obj']
// var urls	= ['obj/female02/female02.obj', 'obj/female02/female02.mtl']
// var urls	= 'obj/female02/Female02_slim.js'

sprite = THREE.ImageUtils.loadTexture( "tex/disc.png" );
	var pgeom = new THREE.SphereGeometry (60,30,30);
	var pmat = new THREE.PointCloudMaterial( { size: 4, sizeAttenuation: false, map: sprite, alphaTest: 0.5, transparent: true } );
	//pmat.color.setHSL( 0.57, 1, 0.7 );
	pmat.color.setHSL( 0.77, 1, 0.7 );
	var pmesh = new THREE.PointCloud( pgeom, pmat );
	scene.add(pmesh);



var loader	= new THREEx.UniversalLoader()
loader.load(urls, function(object3d){

	object3d.traverse( function ( child ) {

	    if ( child.geometry !== undefined ) {

			geom = child.geometry;
			createMesh();

	    }

	} );

	//scene.add(object3d);
})
	

function createMesh() {


			vertices = geom.vertices;
			vl = vertices.length;

			geometry = new THREE.Geometry();
			geometry2 = new THREE.Geometry();


			for ( i = 0; i < vl; i ++ ) {

				var vertex = new THREE.Vector3();
				vertex.x = vertices[ i ].x;
				vertex.y = vertices[ i ].y;
				vertex.z = vertices[ i ].z;

				geometry.vertices.push( vertex );

				var vertex2 = new THREE.Vector3();
				vertex2.x = vertices[ i ].x-5;
				vertex2.y = vertices[ i ].y-45;
				vertex2.z = vertices[ i ].z;

				geometry2.vertices.push( vertex2 );

				if (i < Math.min(pmesh.geometry.vertices.length, vl)) {

					rs = 1;
					kx[i] =  (vertices[i].x - pmesh.geometry.vertices[i].x)/n*rs;
					ky[i] =  (vertices[i].y - pmesh.geometry.vertices[i].y)/n*rs;
					kz[i] =  (vertices[i].z - pmesh.geometry.vertices[i].z)/n*rs;
					console.log(kx[i], i, rs);

				}


			}

			material = new THREE.PointCloudMaterial( { size: 4, sizeAttenuation: false, map: sprite, alphaTest: 0.5, transparent: true } );
			material.color.setHSL( 0.57, 1, 0.3 );
			//material.opacity(0);
			particles = new THREE.PointCloud( geometry, material );
			//scene.add( particles );

			material2 = new THREE.PointCloudMaterial( { size: 4, sizeAttenuation: false, map: sprite, alphaTest: 0.5, transparent: true } );
			material2.color.setHSL( 0.57, 1, 0.7 );
			particles2 = new THREE.PointCloud( geometry2, material2 );
			particles2.scale.x = particles2.scale.y = particles2.scale.z = 0.6;
			//scene.add( particles2 )

}



	

	var pgeom2 = new THREE.Geometry();
	var vert = pmesh.geometry.vertices;

	//console.log(vertices);
	var pmat2 = new THREE.PointCloudMaterial( { size: 4, sizeAttenuation: false, map: sprite, alphaTest: 0.5, transparent: true } );
	pmat2.color.setHSL( 0.97, 1, 0.7 );
	vert.forEach(function (p) {
		var particle = new THREE.Vector3 (p.x, p.y, p.z);
		particle.vy = 0.05 + Math.random()*0.5;
		pgeom2.vertices.push(particle);
	});

	var pmesh2 = new THREE.PointCloud( pgeom2, pmat2 );
	//pmesh2.sortParticles = true;
	pmesh2.position.x = 80;

	for (var i = pmesh2.geometry.vertices.length - 1; i >= 0; i--) {

		pmesh2.geometry.vertices[i].x = 0;

	};
	//pmat.color.setHSL( 0.27, 1, 0.7 );
	//scene.add(pmesh2);

	var pgeom3 = new THREE.BoxGeometry (60,60,60);
	//var pmat3 = new THREE.PointCloudMaterial( { size: 4, sizeAttenuation: false, map: sprite, alphaTest: 0.5, transparent: true } );
	var pmat3 = new THREE.MeshBasicMaterial( {color: 0x00ff00, transparent: true} );
	pmat3.color.setHSL( 0.57, 1, 0.7 );
	pmat3.opacity = 0.5;


	//pmat.color.setHSL( 0.57, 1, 0.7 );
	var pmesh3 = new THREE.Mesh( pgeom3, pmat3 );
	cvl = pmesh.geometry.vertices.length;

	cubev = pgeom3.vertices;
	
	/*for ( i = 0; i < cvl; i ++ ) {

		var vertex = new THREE.Vector3();
		vertex.x = vertices[ i ].x-5;
		vertex.y = vertices[ i ].y-30;
		vertex.z = vertices[ i ].z;

		geometry.vertices.push( vertex );

		var vertex2 = new THREE.Vector3();
		vertex2.x = vertices[ i ].x-5;
		vertex2.y = vertices[ i ].y-45;
		vertex2.z = vertices[ i ].z;

		geometry2.vertices.push( vertex2 );

	}*/

	//scene.add(pmesh3);



function applyAnim() {



}


	for (var i = pmesh.geometry.vertices.length - 1; i >= 0; i--) {
		vel[i] = 0;
	}



	var tmp = pmesh;



	//////////////////////////////////////////////////////////////////////////////////
	//		Camera Controls							//
	//////////////////////////////////////////////////////////////////////////////////

	controls = new THREE.OrbitControls( camera );
	controls.update();

	//////////////////////////////////////////////////////////////////////////////////
	//		Additional Controls						//
	//////////////////////////////////////////////////////////////////////////////////

	$('.navi').click(function() {

		for (var i = pmesh.geometry.vertices.length - 1; i >= 0; i--) {
			vel[i] = Math.random()*4+2;
		}
		console.log('MESH: OK');

		for (var i = particles.geometry.vertices.length - 1; i >= 0; i--) {
			vel[i] = Math.random()*4+2;
		}
		console.log('DKV_MESH: OK');
		//tmp = Math.random()*200-100;
		tmp = particles;
		dt = 0;
	});

	$('#home').click(function() {
		tmp = particles;
	});

	$('#info').click(function() {
		tmp = pmesh;
	});

	/*particles2.on('click', function(){
	    particles2.scale.x *= 2;
	});*/

	//////////////////////////////////////////////////////////////////////////////////
	//		render the scene						//
	//////////////////////////////////////////////////////////////////////////////////

	animate();
	function animate() {

	requestAnimationFrame( animate );

		//console.log(kx);
		pmesh.geometry.verticesNeedUpdate = true;


		dt += 1;
		
		if (dt < n) {

			for (var i = pmesh.geometry.vertices.length - 1; i >= 0; i--) {
				pmesh.geometry.vertices[i].x += kx[i];
				pmesh.geometry.vertices[i].y += ky[i];
				pmesh.geometry.vertices[i].z += kz[i];	
				}
		}


		
		/*
		for (var i = tmp.geometry.vertices.length - 1; i >= 0; i--) {
			if (tmp.geometry.vertices[i].y > -300){
				tmp.geometry.vertices[i].y -= vel[i];
			}
			//console.log(pmesh.geometry.vertices[i].x);
		}

		tmp.geometry.verticesNeedUpdate = true;
		*/



		
	renderer.render( scene, camera );
	}