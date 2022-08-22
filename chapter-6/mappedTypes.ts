type NativeTrees = 'Grand Fir' | 'Red Alder' | 'Douglas Fir'
type TreeType = 'evergreen' | 'deciduous'

let TreeToTypeRecord: Record<NativeTrees, TreeType> = {
    'Grand Fir': 'evergreen',
    'Red Alder': 'deciduous',
    'Douglas Fir': 'evergreen'
}

let TreeToTypeMap: {[K in NativeTrees]: TreeType} = {
    'Grand Fir': 'evergreen',
    'Red Alder': 'deciduous',
    'Douglas Fir': 'evergreen'
}

type TreeToTypeObject = {
    'Grand Fir': 'evergreen',
    'Red Alder': 'deciduous',
    'Douglas Fir': 'evergreen'
}

type PartialMap = Partial<TreeToTypeObject>

let partially: PartialMap = {
    'Grand Fir': 'evergreen'
}

// Type '{ 'Grand Fir': "evergreen"; }' is missing the following properties 
// from type 'Required<TreeToTypeObject>': 'Red Alder', 'Douglas Fir'ts(2739)
let requiredTrees: Required<TreeToTypeObject> = {
    'Grand Fir': 'evergreen'
}

let pickedTrees: Pick<TreeToTypeObject, 'Douglas Fir' | 'Red Alder'> = {
    'Red Alder': 'deciduous',
    'Douglas Fir': 'evergreen'
}

let readTrees: Readonly<TreeToTypeObject> = {
    'Grand Fir': 'evergreen',
    'Red Alder': 'deciduous',
    'Douglas Fir': 'evergreen'
}

// Cannot assign to ''Grand Fir'' because it is a read-only property.ts(2540)
readTrees['Grand Fir'] = 'Something else'