---
outline: 1
---
# Junit

用于测试代码

```java
public class UtilsTest {  
    // 常用注解  
    // @BeforeClass：在所有测试方法执行之前运行，只执行一次  
    // @AfterClass：在所有测试方法执行之后运行，只执行一次  
    // @Before：在每个测试方法执行之前运行，可用于初始化测试环境  
    // @After：在每个测试方法执行之后运行，可用于清理测试环境  
    // @Test：标记测试方法，可用于分组、过滤、排序  
    // @Ignore：忽略测试方法，不执行该测试方法  
    // @RunWith：指定测试运行器，如JUnit4，JUnit5等  
  
    @Test  
    public void add() {  
        int result = Utils.add(2, 3);  
        // 写断言  
        // expected: 期望值  
        // actual: 实际值  
        assertEquals(5, result);  
        //assertEquals("加法运算有问题",4, result); // 期望值和实际值不一致，测试失败，输出错误信息  
    }  
  
    @Test  
    public void subtract() {  
        // 参数化测试  
    }  
  
}
```

# JDBC (Java Database Connectivity)

## 流程

1. **注册驱动**：虽然代码中注释掉了这一步骤，但在早期版本的JDBC中，这是必要的，用于加载特定数据库的驱动程序。在Java 6及更高版本中，可以通过`DriverManager`自动完成驱动的加载，因此这一步可以省略。
2. **获取连接对象**：通过`DriverManager.getConnection()`方法建立与数据库的连接，需要提供数据库的URL、用户名和密码。
3. **获取执行SQL语句的对象**：这里使用了`PreparedStatement`，它允许预编译SQL语句，有助于提高性能并防止SQL注入攻击。
4. **设置参数并执行SQL语句**：对于包含参数的SQL语句，使用`PreparedStatement`的方法（如`setString()`）来设置参数值。注意参数索引从1开始计数。
5. **处理结果集**：通过调用`executeQuery()`方法执行查询操作，并返回一个`ResultSet`对象。然后可以通过遍历`ResultSet`来处理查询结果。
6. **释放资源**：按照“后打开，先关闭”的原则，依次关闭`ResultSet`、`PreparedStatement`和`Connection`等资源，以避免内存泄漏。

## 示例代码

```java
public static void main(String[] args) throws Exception {  
    // 1.注册驱动 可不写  
    // 2.获取连接对象  
    String url = "jdbc:mysql://localhost:3306/learn";  
    String username = "root";  
    String password = "@@asd17098932067";  
    Connection connection = DriverManager.getConnection(url, username, password);  
  
    // 3.获取执行sql语句的对象  
    PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM t_user WHERE uname =?");  
  
    System.out.println("请输入姓名：");  
    Scanner scanner = new Scanner(System.in);  
    String name = scanner.next();  
  
    // 4.设置参数，并执行sql语句  
    preparedStatement.setString(1, name); // 参数位置从1开始  
    ResultSet resultSet = preparedStatement.executeQuery();  
	// executeQuery()执行查询语句，得到结果集
	// executeUpdate()执行DML语句(增删改)，得到int结果，表示DML影响多少行数据
  
    // 5.处理结果集。遍历ResultSet，打印每行数据  
    while (resultSet.next()) {  
        int uid = resultSet.getInt("uid");  
        String uname = resultSet.getString("uname");  
        String ugender = resultSet.getString("ugender");  
        int uage = resultSet.getInt("uage");  
        System.out.println(uid + "\t" + uname + "\t" + ugender + "\t" + uage);  
    }  
    // 6.释放资源，先开后关  
    resultSet.close();  
    preparedStatement.close();  
    connection.close();  
}
```

# Mybatis

## 流程

1. **配置 MyBatis 环境**：
   - 编写 `mybatis-config.xml` 配置文件，设置数据源、事务管理器等基本信息。
   - 创建实体类（Entity），这些类通常对应数据库中的表。
2. **编写映射文件**：
   - 为每个需要操作的数据库表创建一个 XML 映射文件（Mapper XML 文件）或者使用注解方式定义 SQL 语句。
   - 在映射文件中定义 SQL 查询语句，如 `select`, `insert`, `update`, `delete` 等，并指定返回类型或结果映射规则。
3. **创建 Mapper 接口**：
   - 定义接口方法与映射文件中的 SQL 语句相对应。
   - 方法签名必须与映射文件中的 SQL 语句匹配，包括参数类型和返回值类型。
4. **初始化 SqlSessionFactory**：
   - 使用 `SqlSessionFactoryBuilder` 构建 `SqlSessionFactory` 实例，这是通过读取 `mybatis-config.xml` 配置文件完成的。
   - `SqlSessionFactory` 是线程安全的，可以被多个 DAO 或 Service 共享使用。
5. **获取 SqlSession**：
   - 从 `SqlSessionFactory` 中打开一个新的 `SqlSession` 实例，用于执行 SQL 操作。
   - `SqlSession` 提供了执行 SQL 语句的方法，如 `selectOne`, `selectList`, `insert`, `update`, `delete` 等。
6. **执行 CRUD 操作**：
   - 使用 `SqlSession` 对象调用 Mapper 接口的方法来执行具体的数据库操作。
   - 可以通过 `SqlSession` 直接执行 SQL 语句，也可以通过 Mapper 接口间接执行。
7. **处理事务**：
   - 如果需要，可以通过 `SqlSession` 开始、提交或回滚事务。
   - 成功执行后调用 `commit()` 提交事务；若发生异常则调用 `rollback()` 回滚事务。
8. **关闭资源**：
   - 执行完所有操作后，需要显式地关闭 `SqlSession` 以释放数据库连接等资源。
   - 建议在 finally 块中关闭 `SqlSession`，确保即使出现异常也能正确关闭。

## 示例代码

```java
public static void main(String[] args) throws IOException {  
    String resource = "mybatis-config.xml";  
    InputStream inputStream = Resources.getResourceAsStream(resource);  
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream); 
     
    // 获取sqlSession对象  
    SqlSession sqlSession = sqlSessionFactory.openSession();  
    // 获取代理接口对象  
    UserMapper userMapper = sqlSession.getMapper(UserMapper.class);  
    // 查询所有用户信息  
    List<User> users = userMapper.selectAll();  
    for (User user : users) {  
        System.out.println(user);  
    }  
    sqlSession.close();  
}
```

# Spring

## 核心概念：

### 1. **依赖注入（Dependency Injection, DI）**

- 这是Spring框架的核心特性之一。通过DI，对象不再负责自己创建或管理它们的依赖关系，而是由外部（通常是Spring容器）来负责这些工作。这样可以减少代码间的耦合度，提高代码的可测试性和可维护性。

### 2. **控制反转（Inversion of Control, IoC）容器**

- 控制反转是一种设计原则，用于减少代码之间的直接依赖。在Spring中，IoC容器是管理Bean（对象）生命周期和配置的中心枢纽。它根据配置信息（如XML文件或注解）来实例化、配置和组装对象。

### 3. **面向切面编程（Aspect-Oriented Programming, AOP）**

- AOP允许开发者定义“切面”，以集中处理那些影响多个类的通用任务，比如事务管理、安全性和日志记录等。通过AOP，这些服务可以在不影响业务逻辑的情况下添加到应用程序中，从而提高模块化程度。

### 4. **事务管理**

- Spring提供了一个统一的事务管理接口，支持本地事务（如JDBC事务）和全局事务（如JTA事务）。这使得开发者能够更容易地实现事务控制，而无需关心底层的数据源或持久层技术。

## bean标签属性说明

- **id="bookDao"**: bean的Id
- **name="dao bookDaoImpl daoImpl"**: bean别名
- **class="com.itheima.dao.impl.BookDaoImpl"**: bean类型，静态工厂类，FactoryBean类
- **scope="singleton"**: 控制bean的实例数量
- **init-method="init"**: 生命周期初始化方法
- **destroy-method="destory"**: 生命周期销毁方法
- **autowire="byType"**: 自动装配类型
- **factory-method="getInstance"**: bean工厂方法，应用于静态工厂或实例工厂
- **factory-bean="com.itheima.factory.BookDaoFactory"**: 实例工厂bean
- **lazy-init="true"**: 控制bean延迟加载

## 注解开发

### Spring注解开发流程

1. **引入依赖**：首先需要在项目的构建文件中（如Maven的`pom.xml`或Gradle的`build.gradle`）添加Spring框架及其相关组件的依赖。
2. **创建Java配置类**：使用`@Configuration`注解来标记一个Java类作为Spring的配置类，这个类可以替代传统的XML配置文件。
3. **定义Bean**：使用`@Bean`注解在方法上，用于声明一个方法的返回值是一个Bean对象，该对象会被注册到Spring容器中。
4. **组件扫描**：使用`@ComponentScan`注解开启组件扫描，这样Spring可以自动发现并注册带有`@Component`, `@Service`, `@Repository`, `@Controller`等注解的类为Bean。
5. **依赖注入**：使用`@Autowired`注解自动装配Bean的属性，构造器参数或方法参数。也可以使用`@Resource`（来自Java标准）来实现相同的功能。
6. **配置运行环境**：如果项目是Web应用，可以通过`@EnableWebMvc`注解启用Spring MVC的功能；如果是非Web应用，可能需要配置应用程序上下文。
7. **启动应用**：最后，编写主类使用`SpringApplication.run()`方法启动Spring Boot应用。

### 常用注解

- **@Configuration**：用于定义配置类，可以包含多个由`@Bean`注解的方法。
- **@Bean**：用于在配置类中定义一个方法，其返回值将作为一个Bean被Spring管理。
- **@ComponentScan**：指定要扫描的包，以便自动检测带有@Component注解的类。
- **@Component**：通用的组件注解，可以用来标记任何被Spring管理的组件。
- **@Service**：专门用于业务层组件。
- **@Repository**：专门用于数据访问层组件。
- **@Controller**：专门用于表现层组件。
- **@Autowired**：自动装配依赖关系，可以作用于字段、构造器或方法。
- **@Value**：从属性文件中读取属性值，并将其绑定到字段上。
- **@RequestMapping**：映射HTTP请求到处理方法上，通常与`@Controller`一起使用。
- **@GetMapping**, **@PostMapping**, **@PutMapping**, **@DeleteMapping**：这些注解是`@RequestMapping`的特化版本，分别用于GET, POST, PUT, DELETE请求。
- **@RestController**：组合了`@Controller`和`@ResponseBody`注解，用于标记RESTful风格的控制器。
- **@Profile**：用于指定Bean在特定的环境中激活。
- **@Transactional**：用于标记需要事务管理的方法或类。

| XML配置                                          | 注解配置                                               | 描述                                                                                 |
| ------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `<bean>`                                         | `@Component`, `@Service`, `@Repository`, `@Controller` | 定义一个Bean，其中`@Component`是一个通用的注解，而其他三个是针对特定层的专门化注解。 |
| `<property name="..." value="...">`              | `@Value`                                               | 给Bean属性赋值。                                                                     |
| `<property name="..." ref="...">`                | `@Autowired`                                           | 将另一个Bean注入到当前Bean的一个属性中。                                             |
| `<constructor-arg>`                              | `@Autowired`                                           | 在构造函数中注入依赖。                                                               |
| `<context:component-scan>`                       | `@ComponentScan`                                       | 自动扫描并注册带有@Component等注解的类。                                             |
| `<bean factory-bean="..." factory-method="...">` | `@Configuration` 和 `@Bean` 方法                       | 使用工厂方法创建Bean。                                                               |

# Spring AOP

## 概念

- **AOP** (Aspect Oriented Programming) 面向切面编程，是一种编程范式，它允许程序员定义“切面”——代码片段，这些代码片段可以在多个逻辑点上以预定义的方式执行。

## 作用

- 在不影响或改变原有业务逻辑的前提下，为程序的功能进行增强或添加新的功能。

## 核心概念

- **代理（Proxy）**：Spring AOP的核心机制之一，通过代理模式来实现对目标对象的增强。
- **连接点（JoinPoint）**：程序执行过程中的某个特定点，如方法调用。在Spring AOP中，通常指代任何方法的执行。
- **切入点（Pointcut）**：定义了哪些连接点会被织入通知，即匹配连接点的规则。
- **通知（Advice）**：在特定的连接点上执行的动作，可以看作是增强功能的具体实现。
- **切面（Aspect）**：通知和切入点的组合，描述了何时何地如何执行通知。
- **目标对象（Target）**：被代理的对象，即原始对象。

## 切入点表达式

- **标准格式**：`execution(访问修饰符 返回值 包名.类/接口名.方法名(参数) 异常名)`
  - 示例：`execution(* com.itheima.service.*Service.*(..))` 匹配所有服务层的方法。
- **通配符**
  - `*`：匹配任意字符。
  - `..`：匹配任意数量的参数或任意层级的包。
  - `+`：匹配子类类型。
- **书写技巧**
  1. 遵循标准规范。
  2. 对于查询操作，建议返回值使用`*`匹配。
  3. 尽量避免使用`.`来详细描述包路径。
  4. 描述接口时，可以使用`*`来代替具体的模块名，如`*Service`。
  5. 方法名尽量保留动词部分，名词部分可以用`*`代替，比如`getBy*`。
  6. 参数的选择应根据实际需要灵活调整。

## 通知类型

- **前置通知**：在方法执行前触发。
- **后置通知**：在方法执行后触发，无论方法是否抛出异常。
- **环绕通知**：围绕方法调用，可以在调用前后执行额外的操作。环绕通知必须有一个`ProceedingJoinPoint`类型的参数来调用原始方法，并且其返回值通常设置为`Object`类型。环绕通知还可以用来处理原始方法调用过程中可能出现的异常。
- **返回后通知**：仅在方法成功返回后触发。
- **抛出异常后通知**：当方法执行过程中抛出异常时触发。

| 通知类型       | 注解              | 作用                                         | 示例代码                                                                                                                                                           |
| -------------- | ----------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 前置通知       | `@Before`         | 在目标方法调用之前执行                       | `@Before("execution(* com.example.service.*Service.*(..))")`<br>`public void beforeAdvice() { ... }`                                                               |
| 后置通知       | `@After`          | 在目标方法调用之后执行，无论是否抛出异常     | `@After("execution(* com.example.service.*Service.*(..))")`<br>`public void afterAdvice() { ... }`                                                                 |
| 返回后通知     | `@AfterReturning` | 仅在目标方法成功返回后执行                   | `@AfterReturning(pointcut = "execution(* com.example.service.*Service.*(..))", returning = "result")`<br>`public void afterReturningAdvice(Object result) { ... }` |
| 抛出异常后通知 | `@AfterThrowing`  | 当目标方法抛出异常时执行                     | `@AfterThrowing(pointcut = "execution(* com.example.service.*Service.*(..))", throwing = "ex")`<br>`public void afterThrowingAdvice(Exception ex) { ... }`         |
| 环绕通知       | `@Around`         | 围绕目标方法调用，可以在调用前后执行额外操作 | `@Around("execution(* com.example.service.*Service.*(..))")`<br>`public Object aroundAdvice(ProceedingJoinPoint joinPoint) throws Throwable { ... }`               |

## 获取切入点方法的信息

- **JoinPoint**：可以用于前置、后置、返回后、抛出异常后的通知，作为方法的第一个参数。
- **ProceedingJoinPoint**：专门用于环绕通知，提供了调用原始方法的能力。
- **获取返回值**：可以通过返回后通知或者环绕通知获取到。
- **获取异常信息**：通过抛出异常后通知或者环绕通知捕获。

_JoinPoint 可获取的信息_

| 方法                         | 描述                                 | 示例代码                                             |
| ---------------------------- | ------------------------------------ | ---------------------------------------------------- |
| `Signature getSignature()`   | 获取方法签名，包括方法名、参数列表等 | `Signature signature = joinPoint.getSignature();`    |
| `String getName()`           | 获取方法名                           | `String methodName = signature.getName();`           |
| `Object[] getArgs()`         | 获取方法的参数值数组                 | `Object[] args = joinPoint.getArgs();`               |
| `Object getTarget()`         | 获取被代理的对象（即目标对象）       | `Object target = joinPoint.getTarget();`             |
| `Object getThis()`           | 获取当前执行的代理对象               | `Object proxy = joinPoint.getThis();`                |
| `StaticPart getStaticPart()` | 获取静态部分，包含签名和其他静态信息 | `StaticPart staticPart = joinPoint.getStaticPart();` |

_ProceedingJoinPoint 可获取的信息_

| 方法                            | 描述                                 | 示例代码                                                       |
| ------------------------------- | ------------------------------------ | -------------------------------------------------------------- |
| `Signature getSignature()`      | 获取方法签名，包括方法名、参数列表等 | `Signature signature = proceedingJoinPoint.getSignature();`    |
| `String getName()`              | 获取方法名                           | `String methodName = signature.getName();`                     |
| `Object[] getArgs()`            | 获取方法的参数值数组                 | `Object[] args = proceedingJoinPoint.getArgs();`               |
| `Object getTarget()`            | 获取被代理的对象（即目标对象）       | `Object target = proceedingJoinPoint.getTarget();`             |
| `Object getThis()`              | 获取当前执行的代理对象               | `Object proxy = proceedingJoinPoint.getThis();`                |
| `StaticPart getStaticPart()`    | 获取静态部分，包含签名和其他静态信息 | `StaticPart staticPart = proceedingJoinPoint.getStaticPart();` |
| `Object proceed()`              | 调用原始方法                         | `Object result = proceedingJoinPoint.proceed();`               |
| `Object proceed(Object[] args)` | 调用原始方法，并传递新的参数值       | `Object result = proceedingJoinPoint.proceed(newArgs);`        |
