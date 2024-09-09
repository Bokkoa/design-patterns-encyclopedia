import { proxy } from "valtio";

interface IPattern {
  name: string;
  family: string;
  available: boolean
}


export const Patterns: IPattern[] = [
  { name: "Abstract Factory", family: "Creational", available: false },
  { name: "Builder", family: "Creational", available: false },
  { name: "Factory", family: "Creational", available: false },
  { name: "Prototype", family: "Creational", available: false },
  { name: "Singleton", family: "Creational", available: false },
  { name: "Adapter", family: "Structural", available: false },
  { name: "Bridge", family: "Structural", available: false },
  { name: "Composite", family: "Structural", available: false },
  { name: "Decorator", family: "Structural", available: false },
  { name: "Facade", family: "Structural", available: false },
  { name: "Flyweight", family: "Structural", available: false },
  { name: "Proxy", family: "Structural", available: false },
  { name: "Chain of Responsibility", family: "Behavioral", available: false },
  { name: "Command", family: "Behavioral", available: false },
  { name: "Interpreter", family: "Behavioral", available: false },
  { name: "Iterator", family: "Behavioral", available: false },
  { name: "Mediator", family: "Behavioral", available: false },
  { name: "Memento", family: "Behavioral", available: false },
  { name: "Observer", family: "Behavioral", available: false },
  { name: "State", family: "Behavioral", available: false },
  { name: "Strategy", family: "Behavioral", available: false },
  { name: "Template Method", family: "Behavioral", available: false },
  { name: "Visitor", family: "Behavioral", available: false }
];

export const state = proxy({ searchIndex: 0, searchCriteria: '', patterns: {}, selectedPattern: null })