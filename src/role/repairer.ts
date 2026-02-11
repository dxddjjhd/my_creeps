import nge from './newft/newgetenergy'


const repairer = {

    run : (creep:Creep) => {

        if (creep.store.getFreeCapacity() === 0){

            creep.memory.mode = 'REPAIRING';

        } else if (creep.store.getCapacity() === creep.store.getFreeCapacity()){

            creep.memory.mode = 'HARVESTING';

        }

        if (creep.memory.mode === 'REPAIRING'){

            const targets = creep.room.find(FIND_STRUCTURES,{filter : (structure) => 
                {return ((structure.structureType === STRUCTURE_SPAWN || 
                    structure.structureType === STRUCTURE_TOWER || 
                    structure.structureType === STRUCTURE_EXTENSION || 
                    structure.structureType === STRUCTURE_CONTAINER ||
                    structure.structureType === STRUCTURE_STORAGE) && 
                    structure.hits < structure.hitsMax) || 
                    (structure.structureType === STRUCTURE_ROAD && 
                    structure.hits < (structure.hitsMax * 0.5))
                }})
            
            if (creep.repair(targets[0]) === ERR_NOT_IN_RANGE){

                creep.moveTo(targets[0]);

            }

        } else if (creep.memory.mode === 'HARVESTING'){

            nge.run(creep);

        }
    }

};

export default repairer;