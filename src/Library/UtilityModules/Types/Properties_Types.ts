const StringUnionTypeCreator = <T extends string[]>(...args: T) => args;

const TextSubComp1_Presets = StringUnionTypeCreator('normal', 'calligraphy1', 'calligraphy2', 'formal', 'important');

//
export type TextSubComp1PresetsTypes = typeof TextSubComp1_Presets[number];
