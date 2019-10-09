import { EventCreatePipe } from './event-create.pipe';

describe('EventCreatePipe', () => {
  it('create an instance', () => {
    const pipe = new EventCreatePipe();
    expect(pipe).toBeTruthy();
  });
});
