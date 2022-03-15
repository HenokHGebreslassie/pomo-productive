export class Task {
  public static taskHolder = new Task()

  private _title: string = ''
  private _projectName: string = ''
  private _pomodros : number = 0
  private _done :boolean = false


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get projectName(): string {
    return this._projectName;
  }

  set projectName(value: string) {
    this._projectName = value;
  }

  get pomodros(): number {
    return this._pomodros;
  }

  set pomodros(value: number) {
    this._pomodros = value;
  }

  get done(): boolean {
    return this._done;
  }

  set done(value: boolean) {
    this._done = value;
  }

  public static createTaskFromObject(obj: object) {
    const task: Task = new Task()
    Object.assign(task, obj)
    return task
  }
}
