var scene, camera, renderer, container, aspect, fov, plane, far, mouseX, mouseY, windowHalfX, windowHalfY, geometry,
    starStuff, materialOptions, stars;

function init() {
    container = document.getElementById("canvas"), mouseX = 0, mouseY = 0, aspect = window.innerWidth / window.innerHeight, fov = 40, plane = 1, far = 800, windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2, (camera = new THREE.PerspectiveCamera(fov, aspect, plane, far)).position.z = far / 2, (scene = new THREE.Scene({antialias: !0})).fog = new THREE.FogExp2(1776411, 1e-4), starForge(), (renderer = new THREE.WebGLRenderer({
        antialias: !0,
        alpha: !0
    })).setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1), renderer.setSize(window.innerWidth, window.innerHeight), renderer.autoClear = !1, renderer.setClearColor(0, 0), container.appendChild(renderer.domElement), document.addEventListener("mousemove", onMouseMove, !1)
}

function animate() {
    requestAnimationFrame(animate), render()
}

function render() {
    camera.position.x += .005 * (mouseX - camera.position.x), camera.position.y += .005 * (-mouseY - camera.position.y), camera.lookAt(scene.position), renderer.render(scene, camera)
}

function starForge() {
    geometry = new THREE.SphereGeometry(1e3, 100, 50), materialOptions = {
        color: new THREE.Color(16777215),
        size: 1.1,
        opacity: .8
    }, starStuff = new THREE.PointsMaterial(materialOptions);
    for (var e = 0; e < 45e3; e++) {
        var n = new THREE.Vector3;
        n.x = 2e3 * Math.random() - 1e3, n.y = 2e3 * Math.random() - 1e3, n.z = 2e3 * Math.random() - 1e3, geometry.vertices.push(n)
    }
    stars = new THREE.Points(geometry, starStuff), scene.add(stars)
}

function onMouseMove(e) {
    mouseX = e.clientX - windowHalfX, mouseY = e.clientY - windowHalfY
}

init(), animate();