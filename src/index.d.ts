interface CreepMemory {
    /**
     * 该 creep 在做的事
     */
    mode?: 'HARVESTING'|'UPGRADING'|'BUILDING'|'CARRYING'|'REPAIRING';
    /**
    该 creep 的角色
    **/
    role?: 'upgrader'|'harvester'|'builder'|'worker'|'carrier'|'repairer';
    
}

