//import sc from './spawncontroller'

const qc = {

    run : (type:'upgrader'|'harvester'|'builder',creepnumber: number) => {
    
        if (
            Object.values(Game.creeps).filter((creep) => {
                return creep.memory.role === type
            }).length < creepnumber
        ){
            
            const name :string ='creep' + Game.time;
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE],name,{memory:{role:type}});
        }
    }
};

export default qc;