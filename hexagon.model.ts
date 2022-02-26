import { Line } from './line.model';

export class Hexagon {
  line1: Line;
  line2: Line;
  line3: Line;
  line4: Line;
  line5: Line;
  line6: Line;

  constructor(line1: Line, line2: Line, line3: Line, line4: Line, line5: Line, line6: Line) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.line4 = line4;
    this.line5 = line5;
    this.line6 = line6;
  }
}