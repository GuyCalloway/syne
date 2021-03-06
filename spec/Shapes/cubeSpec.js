describe('Cube', () => {

  beforeEach(() => {
    scene = setupScene();
    cube = new Cube(1, 0, 1, 1, 2, 3, scene);
  })

  it('Can change the position of the cube', () => {
    expect(cube.changePosition(400, 100, 200)).toEqual(new THREE.Vector3(400, 100, 200))
  })

  it('Can change the scale of the cube', () => {
    expect(cube.changeScale(10, 10, 10)).toEqual(new THREE.Vector3(10, 10, 10))
  })
    
});