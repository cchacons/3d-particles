window.onload = function() {
var renderer	= new THREE.WebGLRenderer({
	antialias	: true
});
renderer.setClearColor( 0x070912 );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var container, stats;
var camera, scene, renderer, particles, geometry0, geometry, geometry2, geometry3, geometry4, geometry5, i, h, color, sprite, size;
var tmp_geometry0, tmp_geometry, tmp_geometry2, tmp_geometry3, tmp_geometry4, tmp_geometry5;
var mouseX = 0, mouseY = 0;
var p = [];
var h;
var hue;
var vl = [];
var vt;
var vertices = [];
var vertex = [];
var ground = -100;
var assetsLoadedCount = 0;

var vertices_tmp = [];
var animVertices = [];
var geom = [];
var VertArray = [];
var ObjArray = [];
var material;
var Objects = [];
var delta = 0;
var newpoint = 60;
var cubev = [];
var cvl;
var vel =[];
var cvel =[];
var dvel =[];
var j = 0;
var kx = [],ky = [], kz = [];
var dt = 10000;
var rs;


var n = 30;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var scene	= new THREE.Scene();
//scene.fog = new THREE.FogExp2( 0x070912, 0.001 );
var camera	= new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);

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
//		STATS							//
//////////////////////////////////////////////////////////////////////////////////

var stats = new Stats();
stats.setMode(1); // 0: fps, 1: ms

// align top-left
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';

document.body.appendChild( stats.domElement );

var update = function () {

    stats.begin();

    // monitored code goes here

    stats.end();

    requestAnimationFrame( update );

};

requestAnimationFrame( update );

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

	/*var urls	= ['obj/FinalBaseMesh.obj']

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
	*/

//////////////////////////////////////////////////////////////////////////////////
//		STONE AGE LOADING										//
//////////////////////////////////////////////////////////////////////////////////
	sprite = THREE.ImageUtils.loadTexture( "tex/disc.png" );
	//material = new THREE.PointCloudMaterial( { vertexColors: THREE.VertexColors, size: 4, sizeAttenuation: false, map: sprite, alphaTest: 0.5, transparent: true } );
	material = new THREE.PointCloudMaterial( { size: 4, sizeAttenuation: false, map: sprite, alphaTest: 0.5, transparent: true } );
	//material = new THREE.MeshPhongMaterial( { color: 0x8b8aa5, specular: 0x2b7cc7, shininess: 100, shading: THREE.FlatShading, transparent: true } );
	material.color.setHSL( 0.57, 1, 0.3 );
	//material.color.setHSL( 0.17, 1, 0.6 );

	var pgeom = new THREE.SphereGeometry (45,50,50);

		var vertices = pgeom.vertices;
		var vl = vertices.length;
		geometry0 = new THREE.Geometry();
		tmp_geometry0 = new THREE.Geometry();

		for ( i = 0; i < vl; i ++ ) {

			var vertex = new THREE.Vector3();
			vertex.x = vertices[i].x;
			vertex.y = vertices[i].y;
			vertex.z = vertices[i].z;

			var tmp_vertex = new THREE.Vector3();
			tmp_vertex.x = vertices[i].x;
			tmp_vertex.y = vertices[i].y;
			tmp_vertex.z = vertices[i].z;

			geometry0.vertices.push( vertex );
			tmp_geometry0.vertices.push( tmp_vertex );

		}

	var pmesh = new THREE.PointCloud( tmp_geometry0, material );
	scene.add(pmesh);
	assetsLoadedCount++;

	var pgeom2 = new THREE.SphereGeometry (60,30,30);
	var pmesh2 = new THREE.PointCloud( pgeom2, material );
	//scene.add(pmesh2);

	var pgeom3 = new THREE.SphereGeometry (60,30,30);
	var pmesh3 = new THREE.PointCloud( pgeom3, material );
	//scene.add(pmesh3);

	var loader	= new THREEx.UniversalLoader()

			loader.load('obj/city.obj', function(object3d){

				object3d.traverse( function ( child ) {

				    if ( child.geometry !== undefined ) {

						var geom = child.geometry;
						var vertices = geom.vertices;
						var vl = vertices.length;
						geometry = new THREE.Geometry();
						tmp_geometry = new THREE.Geometry();

						for ( i = 0; i < vl; i ++ ) {

							var vertex = new THREE.Vector3();
							vertex.x = vertices[i].x;
							vertex.y = vertices[i].y;
							vertex.z = vertices[i].z;

							var tmp_vertex = new THREE.Vector3();
							tmp_vertex.x = vertices[i].x;
							tmp_vertex.y = ground;
							tmp_vertex.z = vertices[i].z;

							geometry.vertices.push( vertex );
							tmp_geometry.vertices.push( tmp_vertex );

						}

						mesh1 = new THREE.PointCloud( tmp_geometry, material );
						mesh1.frustumCulled = false;
						scene.add(mesh1);
						assetsLoadedCount++;
				    }

				});

			});



			loader.load('obj/brr_1.obj', function(object3d){

				object3d.traverse( function ( child ) {

				    if ( child.geometry !== undefined ) {

						var geom = child.geometry;
						var vertices = geom.vertices;
						var vl = vertices.length;
						geometry2 = new THREE.Geometry();
						tmp_geometry2 = new THREE.Geometry();

						for ( i = 0; i < vl; i ++ ) {

							var vertex = new THREE.Vector3();
							vertex.x = vertices[i].x;
							vertex.y = vertices[i].y;
							vertex.z = vertices[i].z;

							var tmp_vertex = new THREE.Vector3();
							tmp_vertex.x = vertices[i].x;
							tmp_vertex.y = ground;
							tmp_vertex.z = vertices[i].z;

							geometry2.vertices.push( vertex );
							tmp_geometry2.vertices.push( tmp_vertex );

						}

						mesh2 = new THREE.PointCloud( tmp_geometry2, material );
						mesh2.frustumCulled = false;
						scene.add(mesh2);
						assetsLoadedCount++;

				    }

				});

			});

			loader.load('obj/sphere.obj', function(object3d){

				object3d.traverse( function ( child ) {

				    if ( child.geometry !== undefined ) {

						var geom = child.geometry;
						var vertices = geom.vertices;
						var vl = vertices.length;
						geometry3 = new THREE.Geometry();
						tmp_geometry3 = new THREE.Geometry();

						for ( i = 0; i < vl; i ++ ) {

							var vertex = new THREE.Vector3();
							vertex.x = vertices[i].x;
							vertex.y = vertices[i].y;
							vertex.z = vertices[i].z;

							var tmp_vertex = new THREE.Vector3();
							tmp_vertex.x = vertices[i].x;
							tmp_vertex.y = ground;
							tmp_vertex.z = vertices[i].z;

							geometry3.vertices.push( vertex );
							tmp_geometry3.vertices.push( tmp_vertex );

						}

						mesh3 = new THREE.PointCloud( tmp_geometry3, material );
						mesh3.frustumCulled = false;
						scene.add(mesh3);
						assetsLoadedCount++;

				    }

				});

			});


			loader.load('obj/snow_terrain2.obj', function(object3d){

				object3d.traverse( function ( child ) {

				    if ( child.geometry !== undefined ) {

						var geom = child.geometry;
						var vertices = geom.vertices;
						var vl = vertices.length;
						geometry4 = new THREE.Geometry();
						tmp_geometry4 = new THREE.Geometry();

						for ( i = 0; i < vl; i ++ ) {

							var vertex = new THREE.Vector3();
							vertex.x = vertices[i].x;
							vertex.y = vertices[i].y;
							vertex.z = vertices[i].z;

							var tmp_vertex = new THREE.Vector3();
							tmp_vertex.x = vertices[i].x;
							tmp_vertex.y = ground;
							tmp_vertex.z = vertices[i].z;

							geometry4.vertices.push( vertex );
							tmp_geometry4.vertices.push( tmp_vertex );

						}

						mesh4 = new THREE.PointCloud( tmp_geometry4, material );
						mesh4.frustumCulled = false;
						assetsLoadedCount++;
						console.log(assetsLoadedCount);
						scene.add(mesh4);
						console.log(tmp_geometry4);
				    }

				});

			});


			loader.load('obj/SnowTerrain_2.obj', function(object3d){

				object3d.traverse( function ( child ) {

				    if ( child.geometry !== undefined ) {

						var geom = child.geometry;
						var vertices = geom.vertices;
						var vl = vertices.length;
						geometry5 = new THREE.Geometry();
						tmp_geometry5 = new THREE.Geometry();

						for ( i = 0; i < vl; i ++ ) {

							var vertex = new THREE.Vector3();
							vertex.x = vertices[i].x;
							vertex.y = vertices[i].y;
							vertex.z = vertices[i].z;

							var tmp_vertex = new THREE.Vector3();
							tmp_vertex.x = vertices[i].x;
							tmp_vertex.y = ground;
							tmp_vertex.z = vertices[i].z;

							geometry5.vertices.push( vertex );
							tmp_geometry5.vertices.push( tmp_vertex );

						}

						mesh5 = new THREE.PointCloud( tmp_geometry5, material );
						mesh5.frustumCulled = false;
						assetsLoadedCount++;
						console.log(assetsLoadedCount);
						scene.add(mesh5);
						console.log(tmp_geometry5);
				    }

				});

			});

//////////////////////////////////////////////////////////////////////////////////
//		APP										//
//////////////////////////////////////////////////////////////////////////////////
	
	var dest;
	var flag = 0;
	var others;
	var curr;
	var currGeom;
	var deltaC = 0.002;
	var deltaD = 0.006;


	function flag(){
		flag = 1;
	}

	/*
				if (i < Math.min(pmesh.geometry.vertices.length, vl)) {

					rs = 1;
					kx[i] =  (vertices[i].x - pmesh.geometry.vertices[i].x)/n*rs;
					ky[i] =  (vertices[i].y - pmesh.geometry.vertices[i].y)/n*rs;
					kz[i] =  (vertices[i].z - pmesh.geometry.vertices[i].z)/n*rs;
					console.log(kx[i], i, rs);

				}*/

//////////////////////////////////////////////////////////////////////////////////
//		Additional Controls						//
//////////////////////////////////////////////////////////////////////////////////


	$('.navi').click(function() {
		//dt = 0;
		
		others = curr;
		dest = curr;

		for (var i = dest.geometry.vertices.length - 1; i >= 0; i--) {
			dvel[i] = Math.random()*0.4+0.2;
		}

	});

	$('#home').click(function() {
		curr = mesh2;
		currGeom = geometry2;


	});

	$('#info').click(function() {
		curr = mesh1;
		currGeom = geometry;

	});

	$('#projects').click(function() {
		curr = mesh3;
		currGeom = geometry3;

	});

	$('#team').click(function() {
		curr = mesh4;
		currGeom = geometry4;
	});

	$('#news').click(function() {
		curr = mesh5;
		currGeom = geometry5;
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

						console.log(assetsLoadedCount);



	if (assetsLoadedCount != 6) {
		dest = pmesh3;
		others = pmesh2;
		curr = pmesh;
		currGeom = pgeom;
	} else {
		if ((assetsLoadedCount == 6) && (flag != 1)) {
			$('.deflector').css('opacity','0');
			dest = pmesh;
			others = pmesh2;
			curr = mesh2;
			currGeom = geometry2;
			flag = 1;
		}
	}

		dest.geometry.verticesNeedUpdate = true;
		curr.geometry.verticesNeedUpdate = true;
		others.geometry.verticesNeedUpdate = true;

		if (deltaD < 0.006) {
			deltaD += 0.0001;
		}

		if (deltaC > 0.002) {
			deltaC -= 0.0001;
		}

		dest.rotation.y += deltaD;
		curr.rotation.y -= deltaC;

		/*if (dest.scale.x <2) {
			dest.scale.x = dest.scale.y = dest.scale.z += 0.1;
		}

		if (curr.scale.x >1) {
			curr.scale.x = curr.scale.y = curr.scale.z -= 0.1;
		}*/


		for (var i = dest.geometry.vertices.length - 1; i >= 0; i--) {
			if (dest.geometry.vertices[i].y > ground){
				dest.geometry.vertices[i].y -= dvel[i];
			}
		}

		for (var i = curr.geometry.vertices.length - 1; i >= 0; i--) {
			if (curr.geometry.vertices[i].y < currGeom.vertices[i].y){
				curr.geometry.vertices[i].y += Math.random()*1.4+0.3;
			}
		}

		for (var i = others.geometry.vertices.length - 1; i >= 0; i--) {
			if (others.geometry.vertices[i].y > ground){
				others.geometry.vertices[i].y -= Math.random()*1.4+0.3;
			}
		}


		//console.log('dest.rotation:', dest.rotation.y,'currGeom:', currGeom.vertices.length,'curr.geometry:', curr.geometry.vertices.length);


		//console.log(currGeom.vertices.length, currGeom);



		/*h += Math.PI/180*2;

		hue = Math.cos(h*0.01)*1;
		console.log(hue);
		material.color.setHSL( hue, 0.4, 0.3 );

*/











		//dt += 1;

		/*for (var n = 0; n < Objects.length; n++) {
			Objects[n].geometry.verticesNeedUpdate = true;
		}*/

		//console.log(tmp.geometry.vertices.length, tmp.geometry.vertices[1].y);

		//console.log(tmp);

		//tmp.geometry.verticesNeedUpdate = true;

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


}