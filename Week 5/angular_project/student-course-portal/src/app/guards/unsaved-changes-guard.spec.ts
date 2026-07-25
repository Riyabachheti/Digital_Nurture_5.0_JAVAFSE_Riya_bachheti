import { unsavedChangesGuard } from './unsaved-changes-guard';

describe('unsavedChangesGuard', () => {
  it('should allow navigation when the form is not dirty', () => {
    const component = {
      enrollForm: { dirty: false }
    };

    const result = unsavedChangesGuard(
      component as any,
      {} as any,
      {} as any,
      {} as any
    );

    expect(result).toBe(true);
  });
});