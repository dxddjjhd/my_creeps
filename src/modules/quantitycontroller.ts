import sc from './spawncontroller'

const qc = {

    run : (type:'upgrader'|'harvester'|'builder'|'worker'|'carrier',creepnumber: number) => {
    
        if (
            Object.values(Game.creeps).filter((creep) => {
                return creep.memory.role === type
            }).length < creepnumber
        ){
                       
            sc.spawn('Spawn1',type);
        }
    }
};

export default qc;