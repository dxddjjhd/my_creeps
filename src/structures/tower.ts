const tower = {

    attack : (creeps:Creep[]) => {

        const towerlist = Object.values(Game.structures).filter((structure) => {return structure.structureType === STRUCTURE_TOWER});
        
        for (const towers of towerlist){
            const tower = towers as StructureTower
            for (let creep of creeps){

                tower.attack(creep);
            }
        }
    }

};

export default tower;