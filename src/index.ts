import { MeshBuilder } from '@babylonjs/core';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { Scene } from '@babylonjs/core/scene';

export const MakeBall = (name: string, scene: Scene) => {
    console.log("It's my ball.");
    
    let ball = MeshBuilder.CreateSphere(name, { diameter: 2 }, scene);
    
    let mat = new StandardMaterial("material", scene);
    mat.diffuseColor.copyFromFloats(1, 0, 0);
    ball.material = mat;

    return ball;
}