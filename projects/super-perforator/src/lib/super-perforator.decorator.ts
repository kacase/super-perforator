export class SuperPerforatorDecorator {}

export function perforate(): MethodDecorator {
  return perforateMethod;
}

function peforateClass<TFunction extends Function>(target: TFunction) {
  return target;
}

function perforateParameter(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {}

function perforateProperty(target: Object, propertyKey: string | symbol) {}

function perforateMethod(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<any>
): TypedPropertyDescriptor<any> {
  const methodName = propertyKey.toString();
  const className = target.constructor.name;
  let counter = 0;

  performance.mark(`${className}.${methodName}()`);

  const originalMethod = descriptor.value; // save a reference to the original method
  // NOTE: Do not use arrow syntax here. Use a function expression in
  descriptor.value = function (...args: any[]): unknown {
    // pre
    const executionName = `${className}.${methodName}():${counter++}`;

    performance.mark(executionName + '_start');

    const result = originalMethod?.apply(this, args);

    performance.mark(executionName + '_end');

    performance.measure(
      executionName,
      executionName + '_start',
      executionName + '_end'
    );

    return result as MethodDecorator;
  };

  return descriptor;
}
