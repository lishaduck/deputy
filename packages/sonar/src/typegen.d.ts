/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * Alternatives in regular expressions should be grouped when used with anchors
   * @see https://sonarsource.github.io/rspec/#/rspec/S5850/javascript
   */
  'sonarjs/anchor-precedence'?: Linter.RuleEntry<[]>
  /**
   * Arguments to built-in functions should match documented types
   * @see https://sonarsource.github.io/rspec/#/rspec/S3782/javascript
   */
  'sonarjs/argument-type'?: Linter.RuleEntry<[]>
  /**
   * Parameters should be passed in the correct order
   * @see https://sonarsource.github.io/rspec/#/rspec/S2234/javascript
   */
  'sonarjs/arguments-order'?: Linter.RuleEntry<SonarjsArgumentsOrder>
  /**
   * "arguments" should not be accessed directly
   * @see https://sonarsource.github.io/rspec/#/rspec/S3513/javascript
   */
  'sonarjs/arguments-usage'?: Linter.RuleEntry<SonarjsArgumentsUsage>
  /**
   * Callbacks of array methods should have return statements
   * @see https://sonarsource.github.io/rspec/#/rspec/S3796/javascript
   */
  'sonarjs/array-callback-without-return'?: Linter.RuleEntry<[]>
  /**
   * Array constructors should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S1528/javascript
   */
  'sonarjs/array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Braces and parentheses should be used consistently with arrow functions
   * @see https://sonarsource.github.io/rspec/#/rspec/S3524/javascript
   */
  'sonarjs/arrow-function-convention'?: Linter.RuleEntry<SonarjsArrowFunctionConvention>
  /**
   * Tests should include assertions
   * @see https://sonarsource.github.io/rspec/#/rspec/S2699/javascript
   */
  'sonarjs/assertions-in-tests'?: Linter.RuleEntry<[]>
  /**
   * Creating public APIs is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6333/javascript
   */
  'sonarjs/aws-apigateway-public-api'?: Linter.RuleEntry<[]>
  /**
   * Allowing public network access to cloud resources is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6329/javascript
   */
  'sonarjs/aws-ec2-rds-dms-public'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted EBS volumes is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6275/javascript
   */
  'sonarjs/aws-ec2-unencrypted-ebs-volume'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted EFS file systems is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6332/javascript
   */
  'sonarjs/aws-efs-unencrypted'?: Linter.RuleEntry<[]>
  /**
   * Policies granting all privileges are security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6302/javascript
   */
  'sonarjs/aws-iam-all-privileges'?: Linter.RuleEntry<SonarjsAwsIamAllPrivileges>
  /**
   * Policies granting access to all resources of an account are security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6304/javascript
   */
  'sonarjs/aws-iam-all-resources-accessible'?: Linter.RuleEntry<SonarjsAwsIamAllResourcesAccessible>
  /**
   * AWS IAM policies should limit the scope of permissions given
   * @see https://sonarsource.github.io/rspec/#/rspec/S6317/javascript
   */
  'sonarjs/aws-iam-privilege-escalation'?: Linter.RuleEntry<SonarjsAwsIamPrivilegeEscalation>
  /**
   * Policies authorizing public access to resources are security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6270/javascript
   */
  'sonarjs/aws-iam-public-access'?: Linter.RuleEntry<SonarjsAwsIamPublicAccess>
  /**
   * Using unencrypted Elasticsearch domains is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6308/javascript
   */
  'sonarjs/aws-opensearchservice-domain'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted RDS DB resources is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6303/javascript
   */
  'sonarjs/aws-rds-unencrypted-databases'?: Linter.RuleEntry<[]>
  /**
   * Administration services access should be restricted to specific IP addresses
   * @see https://sonarsource.github.io/rspec/#/rspec/S6321/javascript
   */
  'sonarjs/aws-restricted-ip-admin-access'?: Linter.RuleEntry<[]>
  /**
   * Granting access to S3 buckets to all or authenticated users is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6265/javascript
   */
  'sonarjs/aws-s3-bucket-granted-access'?: Linter.RuleEntry<SonarjsAwsS3BucketGrantedAccess>
  /**
   * Authorizing HTTP communications with S3 buckets is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6249/javascript
   */
  'sonarjs/aws-s3-bucket-insecure-http'?: Linter.RuleEntry<[]>
  /**
   * Allowing public ACLs or policies on a S3 bucket is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6281/javascript
   */
  'sonarjs/aws-s3-bucket-public-access'?: Linter.RuleEntry<SonarjsAwsS3BucketPublicAccess>
  /**
   * Disabling server-side encryption of S3 buckets is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6245/javascript
   * @deprecated
   */
  'sonarjs/aws-s3-bucket-server-encryption'?: Linter.RuleEntry<SonarjsAwsS3BucketServerEncryption>
  /**
   * Disabling versioning of S3 buckets is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6252/javascript
   */
  'sonarjs/aws-s3-bucket-versioning'?: Linter.RuleEntry<SonarjsAwsS3BucketVersioning>
  /**
   * Using unencrypted SageMaker notebook instances is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6319/javascript
   */
  'sonarjs/aws-sagemaker-unencrypted-notebook'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted SNS topics is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6327/javascript
   */
  'sonarjs/aws-sns-unencrypted-topics'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted SQS queues is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6330/javascript
   */
  'sonarjs/aws-sqs-unencrypted-queue'?: Linter.RuleEntry<[]>
  /**
   * Bitwise operators should not be used in boolean contexts
   * @see https://sonarsource.github.io/rspec/#/rspec/S1529/javascript
   */
  'sonarjs/bitwise-operators'?: Linter.RuleEntry<[]>
  /**
   * Variables should be used in the blocks where they are declared
   * @see https://sonarsource.github.io/rspec/#/rspec/S2392/javascript
   */
  'sonarjs/block-scoped-var'?: Linter.RuleEntry<SonarjsBlockScopedVar>
  /**
   * Optional boolean parameters should have default value
   * @see https://sonarsource.github.io/rspec/#/rspec/S4798/javascript
   */
  'sonarjs/bool-param-default'?: Linter.RuleEntry<[]>
  /**
   * Function call arguments should not start on new lines
   * @see https://sonarsource.github.io/rspec/#/rspec/S1472/javascript
   */
  'sonarjs/call-argument-line'?: Linter.RuleEntry<[]>
  /**
   * Disabling Certificate Transparency monitoring is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5742/javascript
   * @deprecated
   */
  'sonarjs/certificate-transparency'?: Linter.RuleEntry<SonarjsCertificateTransparency>
  /**
   * Chai assertions should have only one reason to succeed
   * @see https://sonarsource.github.io/rspec/#/rspec/S6092/javascript
   */
  'sonarjs/chai-determinate-assertion'?: Linter.RuleEntry<[]>
  /**
   * Class names should comply with a naming convention
   * @see https://sonarsource.github.io/rspec/#/rspec/S101/javascript
   */
  'sonarjs/class-name'?: Linter.RuleEntry<SonarjsClassName>
  /**
   * Class methods should be used instead of "prototype" assignments
   * @see https://sonarsource.github.io/rspec/#/rspec/S3525/javascript
   */
  'sonarjs/class-prototype'?: Linter.RuleEntry<[]>
  /**
   * Dynamically executing code is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S1523/javascript
   */
  'sonarjs/code-eval'?: Linter.RuleEntry<[]>
  /**
   * Cognitive Complexity of functions should not be too high
   * @see https://sonarsource.github.io/rspec/#/rspec/S3776/javascript
   */
  'sonarjs/cognitive-complexity'?: Linter.RuleEntry<SonarjsCognitiveComplexity>
  /**
   * Comma and logical OR operators should not be used in switch cases
   * @see https://sonarsource.github.io/rspec/#/rspec/S3616/javascript
   */
  'sonarjs/comma-or-logical-or-case'?: Linter.RuleEntry<[]>
  /**
   * Track comments matching a regular expression
   * @see https://sonarsource.github.io/rspec/#/rspec/S124/javascript
   */
  'sonarjs/comment-regex'?: Linter.RuleEntry<SonarjsCommentRegex>
  /**
   * Regular expression quantifiers and character classes should be used concisely
   * @see https://sonarsource.github.io/rspec/#/rspec/S6353/javascript
   */
  'sonarjs/concise-regex'?: Linter.RuleEntry<[]>
  /**
   * A conditionally executed single line should be denoted by indentation
   * @see https://sonarsource.github.io/rspec/#/rspec/S3973/javascript
   * @deprecated
   */
  'sonarjs/conditional-indentation'?: Linter.RuleEntry<SonarjsConditionalIndentation>
  /**
   * Allowing confidential information to be logged is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5757/javascript
   */
  'sonarjs/confidential-information-logging'?: Linter.RuleEntry<SonarjsConfidentialInformationLogging>
  /**
   * Objects should not be created to be dropped immediately without being used
   * @see https://sonarsource.github.io/rspec/#/rspec/S1848/javascript
   */
  'sonarjs/constructor-for-side-effects'?: Linter.RuleEntry<[]>
  /**
   * Allowing requests with excessive content length is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5693/javascript
   */
  'sonarjs/content-length'?: Linter.RuleEntry<SonarjsContentLength>
  /**
   * Disabling content security policy fetch directives is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5728/javascript
   */
  'sonarjs/content-security-policy'?: Linter.RuleEntry<SonarjsContentSecurityPolicy>
  /**
   * Creating cookies without the "HttpOnly" flag is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S3330/javascript
   */
  'sonarjs/cookie-no-httponly'?: Linter.RuleEntry<SonarjsCookieNoHttponly>
  /**
   * Writing cookies is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2255/javascript
   * @deprecated
   */
  'sonarjs/cookies'?: Linter.RuleEntry<[]>
  /**
   * Having a permissive Cross-Origin Resource Sharing policy is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5122/javascript
   */
  'sonarjs/cors'?: Linter.RuleEntry<SonarjsCors>
  /**
   * Disabling CSRF protections is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4502/javascript
   */
  'sonarjs/csrf'?: Linter.RuleEntry<SonarjsCsrf>
  /**
   * Cyclomatic Complexity of functions should not be too high
   * @see https://sonarsource.github.io/rspec/#/rspec/S1541/javascript
   */
  'sonarjs/cyclomatic-complexity'?: Linter.RuleEntry<SonarjsCyclomaticComplexity>
  /**
   * Variables and functions should not be declared in the global scope
   * @see https://sonarsource.github.io/rspec/#/rspec/S3798/javascript
   */
  'sonarjs/declarations-in-global-scope'?: Linter.RuleEntry<[]>
  /**
   * Deprecated APIs should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S1874/javascript
   */
  'sonarjs/deprecation'?: Linter.RuleEntry<[]>
  /**
   * Destructuring syntax should be used for assignments
   * @see https://sonarsource.github.io/rspec/#/rspec/S3514/javascript
   */
  'sonarjs/destructuring-assignment-syntax'?: Linter.RuleEntry<SonarjsDestructuringAssignmentSyntax>
  /**
   * Strict equality operators should not be used with dissimilar types
   * @see https://sonarsource.github.io/rspec/#/rspec/S3403/javascript
   */
  'sonarjs/different-types-comparison'?: Linter.RuleEntry<SonarjsDifferentTypesComparison>
  /**
   * Disabling auto-escaping in template engines is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5247/javascript
   */
  'sonarjs/disabled-auto-escaping'?: Linter.RuleEntry<SonarjsDisabledAutoEscaping>
  /**
   * Using remote artifacts without integrity checks is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5725/javascript
   */
  'sonarjs/disabled-resource-integrity'?: Linter.RuleEntry<[]>
  /**
   * Disabling Mocha timeouts should be explicit
   * @see https://sonarsource.github.io/rspec/#/rspec/S6080/javascript
   */
  'sonarjs/disabled-timeout'?: Linter.RuleEntry<[]>
  /**
   * Allowing browsers to perform DNS prefetching is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5743/javascript
   * @deprecated
   */
  'sonarjs/dns-prefetching'?: Linter.RuleEntry<SonarjsDnsPrefetching>
  /**
   * Character classes in regular expressions should not contain the same character twice
   * @see https://sonarsource.github.io/rspec/#/rspec/S5869/javascript
   */
  'sonarjs/duplicates-in-character-class'?: Linter.RuleEntry<SonarjsDuplicatesInCharacterClass>
  /**
   * "if ... else if" constructs should end with "else" clauses
   * @see https://sonarsource.github.io/rspec/#/rspec/S126/javascript
   */
  'sonarjs/elseif-without-else'?: Linter.RuleEntry<[]>
  /**
   * Repeated patterns in regular expressions should not match the empty string
   * @see https://sonarsource.github.io/rspec/#/rspec/S5842/javascript
   */
  'sonarjs/empty-string-repetition'?: Linter.RuleEntry<[]>
  /**
   * Encrypting data is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4787/javascript
   * @deprecated
   */
  'sonarjs/encryption'?: Linter.RuleEntry<[]>
  /**
   * Encryption algorithms should be used with secure mode and padding scheme
   * @see https://sonarsource.github.io/rspec/#/rspec/S5542/javascript
   */
  'sonarjs/encryption-secure-mode'?: Linter.RuleEntry<[]>
  /**
   * Trailing commas should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S3723/javascript
   * @deprecated
   */
  'sonarjs/enforce-trailing-comma'?: Linter.RuleEntry<SonarjsEnforceTrailingComma>
  /**
   * Replacement strings should reference existing regular expression groups
   * @see https://sonarsource.github.io/rspec/#/rspec/S6328/javascript
   */
  'sonarjs/existing-groups'?: Linter.RuleEntry<[]>
  /**
   * Expressions should not be too complex
   * @see https://sonarsource.github.io/rspec/#/rspec/S1067/javascript
   */
  'sonarjs/expression-complexity'?: Linter.RuleEntry<SonarjsExpressionComplexity>
  /**
   * Track lack of copyright and license headers
   * @see https://sonarsource.github.io/rspec/#/rspec/S1451/javascript
   */
  'sonarjs/file-header'?: Linter.RuleEntry<SonarjsFileHeader>
  /**
   * Default export names and file names should match
   * @see https://sonarsource.github.io/rspec/#/rspec/S3317/javascript
   */
  'sonarjs/file-name-differ-from-class'?: Linter.RuleEntry<[]>
  /**
   * Setting loose POSIX file permissions is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2612/javascript
   */
  'sonarjs/file-permissions'?: Linter.RuleEntry<[]>
  /**
   * File uploads should be restricted
   * @see https://sonarsource.github.io/rspec/#/rspec/S2598/javascript
   */
  'sonarjs/file-uploads'?: Linter.RuleEntry<SonarjsFileUploads>
  /**
   * Track uses of "FIXME" tags
   * @see https://sonarsource.github.io/rspec/#/rspec/S1134/javascript
   */
  'sonarjs/fixme-tag'?: Linter.RuleEntry<[]>
  /**
   * "for...in" loops should filter properties before acting on them
   * @see https://sonarsource.github.io/rspec/#/rspec/S1535/javascript
   */
  'sonarjs/for-in'?: Linter.RuleEntry<[]>
  /**
   * A "for" loop update clause should move the counter in the right direction
   * @see https://sonarsource.github.io/rspec/#/rspec/S2251/javascript
   */
  'sonarjs/for-loop-increment-sign'?: Linter.RuleEntry<SonarjsForLoopIncrementSign>
  /**
   * Disabling content security policy frame-ancestors directive is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5732/javascript
   */
  'sonarjs/frame-ancestors'?: Linter.RuleEntry<SonarjsFrameAncestors>
  /**
   * Functions should not be defined inside loops
   * @see https://sonarsource.github.io/rspec/#/rspec/S1515/javascript
   */
  'sonarjs/function-inside-loop'?: Linter.RuleEntry<SonarjsFunctionInsideLoop>
  /**
   * Function and method names should comply with a naming convention
   * @see https://sonarsource.github.io/rspec/#/rspec/S100/javascript
   */
  'sonarjs/function-name'?: Linter.RuleEntry<SonarjsFunctionName>
  /**
   * Functions should always return the same type
   * @see https://sonarsource.github.io/rspec/#/rspec/S3800/javascript
   */
  'sonarjs/function-return-type'?: Linter.RuleEntry<SonarjsFunctionReturnType>
  /**
   * Future reserved words should not be used as identifiers
   * @see https://sonarsource.github.io/rspec/#/rspec/S1527/javascript
   */
  'sonarjs/future-reserved-words'?: Linter.RuleEntry<[]>
  /**
   * Generators should explicitly "yield" a value
   * @see https://sonarsource.github.io/rspec/#/rspec/S3531/javascript
   */
  'sonarjs/generator-without-yield'?: Linter.RuleEntry<[]>
  /**
   * Using weak hashing algorithms is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4790/javascript
   */
  'sonarjs/hashing'?: Linter.RuleEntry<[]>
  /**
   * Statically serving hidden files is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5691/javascript
   */
  'sonarjs/hidden-files'?: Linter.RuleEntry<[]>
  /**
   * "in" should not be used with primitive types
   * @see https://sonarsource.github.io/rspec/#/rspec/S3785/javascript
   */
  'sonarjs/in-operator-type-error'?: Linter.RuleEntry<SonarjsInOperatorTypeError>
  /**
   * Functions should be called consistently with or without "new"
   * @see https://sonarsource.github.io/rspec/#/rspec/S3686/javascript
   */
  'sonarjs/inconsistent-function-call'?: Linter.RuleEntry<SonarjsInconsistentFunctionCall>
  /**
   * "indexOf" checks should not be for positive numbers
   * @see https://sonarsource.github.io/rspec/#/rspec/S2692/javascript
   */
  'sonarjs/index-of-compare-to-positive-number'?: Linter.RuleEntry<[]>
  /**
   * Creating cookies without the "secure" flag is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2092/javascript
   */
  'sonarjs/insecure-cookie'?: Linter.RuleEntry<SonarjsInsecureCookie>
  /**
   * JWT should be signed and verified with strong cipher algorithms
   * @see https://sonarsource.github.io/rspec/#/rspec/S5659/javascript
   */
  'sonarjs/insecure-jwt-token'?: Linter.RuleEntry<SonarjsInsecureJwtToken>
  /**
   * Assertion arguments should be passed in the correct order
   * @see https://sonarsource.github.io/rspec/#/rspec/S3415/javascript
   */
  'sonarjs/inverted-assertion-arguments'?: Linter.RuleEntry<SonarjsInvertedAssertionArguments>
  /**
   * React components should not render non-boolean condition values
   * @see https://sonarsource.github.io/rspec/#/rspec/S6439/javascript
   */
  'sonarjs/jsx-no-leaked-render'?: Linter.RuleEntry<[]>
  /**
   * Only "while", "do", "for" and "switch" statements should be labelled
   * @see https://sonarsource.github.io/rspec/#/rspec/S1439/javascript
   */
  'sonarjs/label-position'?: Linter.RuleEntry<[]>
  /**
   * Authorizing an opened window to access back to the originating window is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5148/javascript
   */
  'sonarjs/link-with-target-blank'?: Linter.RuleEntry<[]>
  /**
   * Files should not have too many lines of code
   * @see https://sonarsource.github.io/rspec/#/rspec/S104/javascript
   */
  'sonarjs/max-lines'?: Linter.RuleEntry<SonarjsMaxLines>
  /**
   * Functions should not have too many lines of code
   * @see https://sonarsource.github.io/rspec/#/rspec/S138/javascript
   */
  'sonarjs/max-lines-per-function'?: Linter.RuleEntry<SonarjsMaxLinesPerFunction>
  /**
   * "switch" statements should not have too many "case" clauses
   * @see https://sonarsource.github.io/rspec/#/rspec/S1479/javascript
   */
  'sonarjs/max-switch-cases'?: Linter.RuleEntry<SonarjsMaxSwitchCases>
  /**
   * Union types should not have too many elements
   * @see https://sonarsource.github.io/rspec/#/rspec/S4622/javascript
   */
  'sonarjs/max-union-size'?: Linter.RuleEntry<SonarjsMaxUnionSize>
  /**
   * "for" loop increment clauses should modify the loops' counters
   * @see https://sonarsource.github.io/rspec/#/rspec/S1994/javascript
   */
  'sonarjs/misplaced-loop-counter'?: Linter.RuleEntry<[]>
  /**
   * Control flow statements "if", "for", "while", "switch" and "try" should not be nested too deeply
   * @see https://sonarsource.github.io/rspec/#/rspec/S134/javascript
   */
  'sonarjs/nested-control-flow'?: Linter.RuleEntry<SonarjsNestedControlFlow>
  /**
   * "new" should only be used with functions and classes
   * @see https://sonarsource.github.io/rspec/#/rspec/S2999/javascript
   */
  'sonarjs/new-operator-misuse'?: Linter.RuleEntry<SonarjsNewOperatorMisuse>
  /**
   * All branches in a conditional structure should not have exactly the same implementation
   * @see https://sonarsource.github.io/rspec/#/rspec/S3923/javascript
   */
  'sonarjs/no-all-duplicated-branches'?: Linter.RuleEntry<[]>
  /**
   * "Array.prototype.sort()" and "Array.prototype.toSorted()" should use a compare function
   * @see https://sonarsource.github.io/rspec/#/rspec/S2871/javascript
   */
  'sonarjs/no-alphabetical-sort'?: Linter.RuleEntry<[]>
  /**
   * Disabling Angular built-in sanitization is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6268/javascript
   */
  'sonarjs/no-angular-bypass-sanitization'?: Linter.RuleEntry<[]>
  /**
   * "delete" should not be used on arrays
   * @see https://sonarsource.github.io/rspec/#/rspec/S2870/javascript
   */
  'sonarjs/no-array-delete'?: Linter.RuleEntry<[]>
  /**
   * Array indexes should be numeric
   * @see https://sonarsource.github.io/rspec/#/rspec/S3579/javascript
   */
  'sonarjs/no-associative-arrays'?: Linter.RuleEntry<[]>
  /**
   * Constructors should not contain asynchronous operations
   * @see https://sonarsource.github.io/rspec/#/rspec/S7059/javascript
   */
  'sonarjs/no-async-constructor'?: Linter.RuleEntry<[]>
  /**
   * Built-in objects should not be overridden
   * @see https://sonarsource.github.io/rspec/#/rspec/S2424/javascript
   */
  'sonarjs/no-built-in-override'?: Linter.RuleEntry<[]>
  /**
   * "switch" statements should not contain non-case labels
   * @see https://sonarsource.github.io/rspec/#/rspec/S1219/javascript
   */
  'sonarjs/no-case-label-in-switch'?: Linter.RuleEntry<[]>
  /**
   * Using clear-text protocols is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5332/javascript
   */
  'sonarjs/no-clear-text-protocols'?: Linter.RuleEntry<[]>
  /**
   * Tests should not execute any code after "done()" is called
   * @see https://sonarsource.github.io/rspec/#/rspec/S6079/javascript
   */
  'sonarjs/no-code-after-done'?: Linter.RuleEntry<SonarjsNoCodeAfterDone>
  /**
   * Mergeable "if" statements should be combined
   * @see https://sonarsource.github.io/rspec/#/rspec/S1066/javascript
   */
  'sonarjs/no-collapsible-if'?: Linter.RuleEntry<SonarjsNoCollapsibleIf>
  /**
   * Collection size and array length comparisons should make sense
   * @see https://sonarsource.github.io/rspec/#/rspec/S3981/javascript
   */
  'sonarjs/no-collection-size-mischeck'?: Linter.RuleEntry<[]>
  /**
   * Sections of code should not be commented out
   * @see https://sonarsource.github.io/rspec/#/rspec/S125/javascript
   */
  'sonarjs/no-commented-code'?: Linter.RuleEntry<[]>
  /**
   * Regular expressions should not contain control characters
   * @see https://sonarsource.github.io/rspec/#/rspec/S6324/javascript
   */
  'sonarjs/no-control-regex'?: Linter.RuleEntry<[]>
  /**
   * Unused assignments should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1854/javascript
   */
  'sonarjs/no-dead-store'?: Linter.RuleEntry<[]>
  /**
   * "delete" should be used only with object properties
   * @see https://sonarsource.github.io/rspec/#/rspec/S3001/javascript
   */
  'sonarjs/no-delete-var'?: Linter.RuleEntry<[]>
  /**
   * Union and intersection types should not include duplicated constituents
   * @see https://sonarsource.github.io/rspec/#/rspec/S4621/javascript
   */
  'sonarjs/no-duplicate-in-composite'?: Linter.RuleEntry<SonarjsNoDuplicateInComposite>
  /**
   * String literals should not be duplicated
   * @see https://sonarsource.github.io/rspec/#/rspec/S1192/javascript
   */
  'sonarjs/no-duplicate-string'?: Linter.RuleEntry<SonarjsNoDuplicateString>
  /**
   * Two branches in a conditional structure should not have exactly the same implementation
   * @see https://sonarsource.github.io/rspec/#/rspec/S1871/javascript
   */
  'sonarjs/no-duplicated-branches'?: Linter.RuleEntry<SonarjsNoDuplicatedBranches>
  /**
   * Collection elements should not be replaced unconditionally
   * @see https://sonarsource.github.io/rspec/#/rspec/S4143/javascript
   */
  'sonarjs/no-element-overwrite'?: Linter.RuleEntry<SonarjsNoElementOverwrite>
  /**
   * Reluctant quantifiers in regular expressions should be followed by an expression that can't match the empty string
   * @see https://sonarsource.github.io/rspec/#/rspec/S6019/javascript
   */
  'sonarjs/no-empty-after-reluctant'?: Linter.RuleEntry<[]>
  /**
   * Alternation in regular expressions should not contain empty alternatives
   * @see https://sonarsource.github.io/rspec/#/rspec/S6323/javascript
   */
  'sonarjs/no-empty-alternatives'?: Linter.RuleEntry<[]>
  /**
   * Empty character classes should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2639/javascript
   */
  'sonarjs/no-empty-character-class'?: Linter.RuleEntry<[]>
  /**
   * Empty collections should not be accessed or iterated
   * @see https://sonarsource.github.io/rspec/#/rspec/S4158/javascript
   */
  'sonarjs/no-empty-collection'?: Linter.RuleEntry<[]>
  /**
   * Regular expressions should not contain empty groups
   * @see https://sonarsource.github.io/rspec/#/rspec/S6331/javascript
   */
  'sonarjs/no-empty-group'?: Linter.RuleEntry<[]>
  /**
   * Test files should contain at least one test case
   * @see https://sonarsource.github.io/rspec/#/rspec/S2187/javascript
   */
  'sonarjs/no-empty-test-file'?: Linter.RuleEntry<[]>
  /**
   * Equality operators should not be used in "for" loop termination conditions
   * @see https://sonarsource.github.io/rspec/#/rspec/S888/javascript
   */
  'sonarjs/no-equals-in-for-termination'?: Linter.RuleEntry<[]>
  /**
   * Exclusive tests should not be commited to version control
   * @see https://sonarsource.github.io/rspec/#/rspec/S6426/javascript
   */
  'sonarjs/no-exclusive-tests'?: Linter.RuleEntry<[]>
  /**
   * Function calls should not pass extra arguments
   * @see https://sonarsource.github.io/rspec/#/rspec/S930/javascript
   */
  'sonarjs/no-extra-arguments'?: Linter.RuleEntry<SonarjsNoExtraArguments>
  /**
   * Switch cases should end with an unconditional "break" statement
   * @see https://sonarsource.github.io/rspec/#/rspec/S128/javascript
   */
  'sonarjs/no-fallthrough'?: Linter.RuleEntry<[]>
  /**
   * "for in" should not be used with iterables
   * @see https://sonarsource.github.io/rspec/#/rspec/S4139/javascript
   */
  'sonarjs/no-for-in-iterable'?: Linter.RuleEntry<[]>
  /**
   * Function declarations should not be made within blocks
   * @see https://sonarsource.github.io/rspec/#/rspec/S1530/javascript
   */
  'sonarjs/no-function-declaration-in-block'?: Linter.RuleEntry<[]>
  /**
   * The global "this" object should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2990/javascript
   */
  'sonarjs/no-global-this'?: Linter.RuleEntry<[]>
  /**
   * Special identifiers should not be bound or assigned
   * @see https://sonarsource.github.io/rspec/#/rspec/S2137/javascript
   */
  'sonarjs/no-globals-shadowing'?: Linter.RuleEntry<[]>
  /**
   * Boolean expressions should not be gratuitous
   * @see https://sonarsource.github.io/rspec/#/rspec/S2589/javascript
   */
  'sonarjs/no-gratuitous-expressions'?: Linter.RuleEntry<SonarjsNoGratuitousExpressions>
  /**
   * Using hardcoded IP addresses is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S1313/javascript
   */
  'sonarjs/no-hardcoded-ip'?: Linter.RuleEntry<[]>
  /**
   * Hard-coded passwords are security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2068/javascript
   */
  'sonarjs/no-hardcoded-passwords'?: Linter.RuleEntry<SonarjsNoHardcodedPasswords>
  /**
   * Hard-coded secrets are security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6418/javascript
   */
  'sonarjs/no-hardcoded-secrets'?: Linter.RuleEntry<SonarjsNoHardcodedSecrets>
  /**
   * React's useState hook should not be used directly in the render function or body of a component
   * @see https://sonarsource.github.io/rspec/#/rspec/S6442/javascript
   */
  'sonarjs/no-hook-setter-in-body'?: Linter.RuleEntry<[]>
  /**
   * "if/else if" chains and "switch" cases should not have the same condition
   * @see https://sonarsource.github.io/rspec/#/rspec/S1862/javascript
   */
  'sonarjs/no-identical-conditions'?: Linter.RuleEntry<SonarjsNoIdenticalConditions>
  /**
   * Identical expressions should not be used on both sides of a binary operator
   * @see https://sonarsource.github.io/rspec/#/rspec/S1764/javascript
   */
  'sonarjs/no-identical-expressions'?: Linter.RuleEntry<SonarjsNoIdenticalExpressions>
  /**
   * Functions should not have identical implementations
   * @see https://sonarsource.github.io/rspec/#/rspec/S4144/javascript
   */
  'sonarjs/no-identical-functions'?: Linter.RuleEntry<SonarjsNoIdenticalFunctions>
  /**
   * Exceptions should not be ignored
   * @see https://sonarsource.github.io/rspec/#/rspec/S2486/javascript
   */
  'sonarjs/no-ignored-exceptions'?: Linter.RuleEntry<[]>
  /**
   * Return values from functions without side effects should not be ignored
   * @see https://sonarsource.github.io/rspec/#/rspec/S2201/javascript
   */
  'sonarjs/no-ignored-return'?: Linter.RuleEntry<[]>
  /**
   * Dependencies should be explicit
   * @see https://sonarsource.github.io/rspec/#/rspec/S4328/javascript
   */
  'sonarjs/no-implicit-dependencies'?: Linter.RuleEntry<SonarjsNoImplicitDependencies>
  /**
   * Variables should be declared explicitly
   * @see https://sonarsource.github.io/rspec/#/rspec/S2703/javascript
   */
  'sonarjs/no-implicit-global'?: Linter.RuleEntry<[]>
  /**
   * "in" should not be used on arrays
   * @see https://sonarsource.github.io/rspec/#/rspec/S4619/javascript
   */
  'sonarjs/no-in-misuse'?: Linter.RuleEntry<[]>
  /**
   * Assertions should be complete
   * @see https://sonarsource.github.io/rspec/#/rspec/S2970/javascript
   */
  'sonarjs/no-incomplete-assertions'?: Linter.RuleEntry<[]>
  /**
   * Functions should use "return" consistently
   * @see https://sonarsource.github.io/rspec/#/rspec/S3801/javascript
   */
  'sonarjs/no-inconsistent-returns'?: Linter.RuleEntry<SonarjsNoInconsistentReturns>
  /**
   * Strings and non-strings should not be added
   * @see https://sonarsource.github.io/rspec/#/rspec/S3402/javascript
   */
  'sonarjs/no-incorrect-string-concat'?: Linter.RuleEntry<SonarjsNoIncorrectStringConcat>
  /**
   * Users should not use internal APIs
   * @see https://sonarsource.github.io/rspec/#/rspec/S6627/javascript
   */
  'sonarjs/no-internal-api-use'?: Linter.RuleEntry<[]>
  /**
   * Using intrusive permissions is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5604/javascript
   */
  'sonarjs/no-intrusive-permissions'?: Linter.RuleEntry<SonarjsNoIntrusivePermissions>
  /**
   * "await" should only be used with promises
   * @see https://sonarsource.github.io/rspec/#/rspec/S4123/javascript
   */
  'sonarjs/no-invalid-await'?: Linter.RuleEntry<[]>
  /**
   * Regular expressions should be syntactically valid
   * @see https://sonarsource.github.io/rspec/#/rspec/S5856/javascript
   */
  'sonarjs/no-invalid-regexp'?: Linter.RuleEntry<[]>
  /**
   * Function returns should not be invariant
   * @see https://sonarsource.github.io/rspec/#/rspec/S3516/javascript
   */
  'sonarjs/no-invariant-returns'?: Linter.RuleEntry<SonarjsNoInvariantReturns>
  /**
   * Boolean checks should not be inverted
   * @see https://sonarsource.github.io/rspec/#/rspec/S1940/javascript
   */
  'sonarjs/no-inverted-boolean-check'?: Linter.RuleEntry<[]>
  /**
   * Forwarding client IP address is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5759/javascript
   */
  'sonarjs/no-ip-forward'?: Linter.RuleEntry<SonarjsNoIpForward>
  /**
   * Labels should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S1119/javascript
   */
  'sonarjs/no-labels'?: Linter.RuleEntry<[]>
  /**
   * Literals should not be used as functions
   * @see https://sonarsource.github.io/rspec/#/rspec/S6958/javascript
   */
  'sonarjs/no-literal-call'?: Linter.RuleEntry<[]>
  /**
   * Allowing browsers to sniff MIME types is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5734/javascript
   */
  'sonarjs/no-mime-sniff'?: Linter.RuleEntry<SonarjsNoMimeSniff>
  /**
   * Array-mutating methods should not be used misleadingly
   * @see https://sonarsource.github.io/rspec/#/rspec/S4043/javascript
   */
  'sonarjs/no-misleading-array-reverse'?: Linter.RuleEntry<[]>
  /**
   * Unicode Grapheme Clusters should be avoided inside regex character classes
   * @see https://sonarsource.github.io/rspec/#/rspec/S5868/javascript
   */
  'sonarjs/no-misleading-character-class'?: Linter.RuleEntry<[]>
  /**
   * Allowing mixed-content is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5730/javascript
   */
  'sonarjs/no-mixed-content'?: Linter.RuleEntry<SonarjsNoMixedContent>
  /**
   * Assignments should not be made from within sub-expressions
   * @see https://sonarsource.github.io/rspec/#/rspec/S1121/javascript
   */
  'sonarjs/no-nested-assignment'?: Linter.RuleEntry<[]>
  /**
   * Ternary operators should not be nested
   * @see https://sonarsource.github.io/rspec/#/rspec/S3358/javascript
   */
  'sonarjs/no-nested-conditional'?: Linter.RuleEntry<[]>
  /**
   * Functions should not be nested too deeply
   * @see https://sonarsource.github.io/rspec/#/rspec/S2004/javascript
   */
  'sonarjs/no-nested-functions'?: Linter.RuleEntry<SonarjsNoNestedFunctions>
  /**
   * Increment (++) and decrement (--) operators should not be used in a method call or mixed with other operators in an expression
   * @see https://sonarsource.github.io/rspec/#/rspec/S881/javascript
   */
  'sonarjs/no-nested-incdec'?: Linter.RuleEntry<[]>
  /**
   * "switch" statements should not be nested
   * @see https://sonarsource.github.io/rspec/#/rspec/S1821/javascript
   */
  'sonarjs/no-nested-switch'?: Linter.RuleEntry<[]>
  /**
   * Template literals should not be nested
   * @see https://sonarsource.github.io/rspec/#/rspec/S4624/javascript
   */
  'sonarjs/no-nested-template-literals'?: Linter.RuleEntry<[]>
  /**
   * Loops with at most one iteration should be refactored
   * @see https://sonarsource.github.io/rspec/#/rspec/S1751/javascript
   */
  'sonarjs/no-one-iteration-loop'?: Linter.RuleEntry<[]>
  /**
   * Searching OS commands in PATH is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4036/javascript
   */
  'sonarjs/no-os-command-from-path'?: Linter.RuleEntry<[]>
  /**
   * Initial values of parameters, caught exceptions, and loop variables should not be ignored
   * @see https://sonarsource.github.io/rspec/#/rspec/S1226/javascript
   */
  'sonarjs/no-parameter-reassignment'?: Linter.RuleEntry<[]>
  /**
   * Wrapper objects should not be used for primitive types
   * @see https://sonarsource.github.io/rspec/#/rspec/S1533/javascript
   */
  'sonarjs/no-primitive-wrappers'?: Linter.RuleEntry<[]>
  /**
   * Assignments should not be redundant
   * @see https://sonarsource.github.io/rspec/#/rspec/S4165/javascript
   */
  'sonarjs/no-redundant-assignments'?: Linter.RuleEntry<[]>
  /**
   * Boolean literals should not be used in comparisons
   * @see https://sonarsource.github.io/rspec/#/rspec/S1125/javascript
   */
  'sonarjs/no-redundant-boolean'?: Linter.RuleEntry<[]>
  /**
   * Jump statements should not be redundant
   * @see https://sonarsource.github.io/rspec/#/rspec/S3626/javascript
   */
  'sonarjs/no-redundant-jump'?: Linter.RuleEntry<[]>
  /**
   * Optional property declarations should not use both '?' and 'undefined' syntax
   * @see https://sonarsource.github.io/rspec/#/rspec/S4782/javascript
   */
  'sonarjs/no-redundant-optional'?: Linter.RuleEntry<SonarjsNoRedundantOptional>
  /**
   * Redundant pairs of parentheses should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1110/javascript
   * @deprecated
   */
  'sonarjs/no-redundant-parentheses'?: Linter.RuleEntry<SonarjsNoRedundantParentheses>
  /**
   * Variables should be defined before being used
   * @see https://sonarsource.github.io/rspec/#/rspec/S3827/javascript
   */
  'sonarjs/no-reference-error'?: Linter.RuleEntry<SonarjsNoReferenceError>
  /**
   * Disabling strict HTTP no-referrer policy is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5736/javascript
   */
  'sonarjs/no-referrer-policy'?: Linter.RuleEntry<SonarjsNoReferrerPolicy>
  /**
   * Regular expressions should not contain multiple spaces
   * @see https://sonarsource.github.io/rspec/#/rspec/S6326/javascript
   */
  'sonarjs/no-regex-spaces'?: Linter.RuleEntry<[]>
  /**
   * "import" should be used to include external code
   * @see https://sonarsource.github.io/rspec/#/rspec/S3533/javascript
   */
  'sonarjs/no-require-or-define'?: Linter.RuleEntry<[]>
  /**
   * Primitive return types should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4324/javascript
   */
  'sonarjs/no-return-type-any'?: Linter.RuleEntry<[]>
  /**
   * Assertions should not be given twice the same argument
   * @see https://sonarsource.github.io/rspec/#/rspec/S5863/javascript
   */
  'sonarjs/no-same-argument-assert'?: Linter.RuleEntry<SonarjsNoSameArgumentAssert>
  /**
   * Conditionals should start on new lines
   * @see https://sonarsource.github.io/rspec/#/rspec/S3972/javascript
   */
  'sonarjs/no-same-line-conditional'?: Linter.RuleEntry<SonarjsNoSameLineConditional>
  /**
   * Methods should not contain selector parameters
   * @see https://sonarsource.github.io/rspec/#/rspec/S2301/javascript
   */
  'sonarjs/no-selector-parameter'?: Linter.RuleEntry<SonarjsNoSelectorParameter>
  /**
   * Tests should not be skipped without providing a reason
   * @see https://sonarsource.github.io/rspec/#/rspec/S1607/javascript
   */
  'sonarjs/no-skipped-tests'?: Linter.RuleEntry<[]>
  /**
   * "if" statements should be preferred over "switch" when simpler
   * @see https://sonarsource.github.io/rspec/#/rspec/S1301/javascript
   */
  'sonarjs/no-small-switch'?: Linter.RuleEntry<[]>
  /**
   * Track uses of "NOSONAR" comments
   * @see https://sonarsource.github.io/rspec/#/rspec/S1291/javascript
   */
  'sonarjs/no-sonar-comments'?: Linter.RuleEntry<[]>
  /**
   * Tabulation characters should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S105/javascript
   * @deprecated
   */
  'sonarjs/no-tab'?: Linter.RuleEntry<[]>
  /**
   * HTML "<table>" should not be used for layout purposes
   * @see https://sonarsource.github.io/rspec/#/rspec/S5257/javascript
   */
  'sonarjs/no-table-as-layout'?: Linter.RuleEntry<[]>
  /**
   * Promise rejections should not be caught by "try" blocks
   * @see https://sonarsource.github.io/rspec/#/rspec/S4822/javascript
   */
  'sonarjs/no-try-promise'?: Linter.RuleEntry<SonarjsNoTryPromise>
  /**
   * "undefined" should not be passed as the value of optional parameters
   * @see https://sonarsource.github.io/rspec/#/rspec/S4623/javascript
   */
  'sonarjs/no-undefined-argument'?: Linter.RuleEntry<[]>
  /**
   * "undefined" should not be assigned
   * @see https://sonarsource.github.io/rspec/#/rspec/S2138/javascript
   */
  'sonarjs/no-undefined-assignment'?: Linter.RuleEntry<[]>
  /**
   * Multiline blocks should be enclosed in curly braces
   * @see https://sonarsource.github.io/rspec/#/rspec/S2681/javascript
   */
  'sonarjs/no-unenclosed-multiline-block'?: Linter.RuleEntry<[]>
  /**
   * JSX list components keys should match up between renders
   * @see https://sonarsource.github.io/rspec/#/rspec/S6486/javascript
   */
  'sonarjs/no-uniq-key'?: Linter.RuleEntry<[]>
  /**
   * Expanding archive files without controlling resource consumption is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5042/javascript
   */
  'sonarjs/no-unsafe-unzip'?: Linter.RuleEntry<[]>
  /**
   * Errors should not be created without being thrown
   * @see https://sonarsource.github.io/rspec/#/rspec/S3984/javascript
   */
  'sonarjs/no-unthrown-error'?: Linter.RuleEntry<[]>
  /**
   * Collection contents should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4030/javascript
   */
  'sonarjs/no-unused-collection'?: Linter.RuleEntry<[]>
  /**
   * Unused function parameters should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1172/javascript
   */
  'sonarjs/no-unused-function-argument'?: Linter.RuleEntry<[]>
  /**
   * Unused local variables and functions should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1481/javascript
   */
  'sonarjs/no-unused-vars'?: Linter.RuleEntry<[]>
  /**
   * The return value of void functions should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S3699/javascript
   */
  'sonarjs/no-use-of-empty-return-value'?: Linter.RuleEntry<[]>
  /**
   * "catch" clauses should do more than rethrow
   * @see https://sonarsource.github.io/rspec/#/rspec/S2737/javascript
   */
  'sonarjs/no-useless-catch'?: Linter.RuleEntry<[]>
  /**
   * Values should not be uselessly incremented
   * @see https://sonarsource.github.io/rspec/#/rspec/S2123/javascript
   */
  'sonarjs/no-useless-increment'?: Linter.RuleEntry<[]>
  /**
   * Type intersections should use meaningful types
   * @see https://sonarsource.github.io/rspec/#/rspec/S4335/javascript
   */
  'sonarjs/no-useless-intersection'?: Linter.RuleEntry<[]>
  /**
   * React state setter function should not be called with its matching state variable
   * @see https://sonarsource.github.io/rspec/#/rspec/S6443/javascript
   */
  'sonarjs/no-useless-react-setstate'?: Linter.RuleEntry<[]>
  /**
   * Variables declared with "var" should be declared before they are used
   * @see https://sonarsource.github.io/rspec/#/rspec/S1526/javascript
   */
  'sonarjs/no-variable-usage-before-declaration'?: Linter.RuleEntry<SonarjsNoVariableUsageBeforeDeclaration>
  /**
   * Disabling Vue.js built-in escaping is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6299/javascript
   * @deprecated
   */
  'sonarjs/no-vue-bypass-sanitization'?: Linter.RuleEntry<[]>
  /**
   * Cipher algorithms should be robust
   * @see https://sonarsource.github.io/rspec/#/rspec/S5547/javascript
   */
  'sonarjs/no-weak-cipher'?: Linter.RuleEntry<[]>
  /**
   * Cryptographic keys should be robust
   * @see https://sonarsource.github.io/rspec/#/rspec/S4426/javascript
   */
  'sonarjs/no-weak-keys'?: Linter.RuleEntry<[]>
  /**
   * Wildcard imports should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2208/javascript
   */
  'sonarjs/no-wildcard-import'?: Linter.RuleEntry<[]>
  /**
   * Non-existent operators '=+', '=-' and '=!' should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2757/javascript
   */
  'sonarjs/non-existent-operator'?: Linter.RuleEntry<[]>
  /**
   * Arithmetic operators should only have numbers as operands
   * @see https://sonarsource.github.io/rspec/#/rspec/S3760/javascript
   */
  'sonarjs/non-number-in-arithmetic-expression'?: Linter.RuleEntry<SonarjsNonNumberInArithmeticExpression>
  /**
   * Properties of variables with "null" or "undefined" values should not be accessed
   * @see https://sonarsource.github.io/rspec/#/rspec/S2259/javascript
   */
  'sonarjs/null-dereference'?: Linter.RuleEntry<[]>
  /**
   * "<object>" tags should provide an alternative content
   * @see https://sonarsource.github.io/rspec/#/rspec/S5264/javascript
   */
  'sonarjs/object-alt-content'?: Linter.RuleEntry<[]>
  /**
   * Arithmetic operations should not result in "NaN"
   * @see https://sonarsource.github.io/rspec/#/rspec/S3757/javascript
   */
  'sonarjs/operation-returning-nan'?: Linter.RuleEntry<[]>
  /**
   * Using shell interpreter when executing OS commands is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4721/javascript
   */
  'sonarjs/os-command'?: Linter.RuleEntry<[]>
  /**
   * Origins should be verified during cross-origin communications
   * @see https://sonarsource.github.io/rspec/#/rspec/S2819/javascript
   */
  'sonarjs/post-message'?: Linter.RuleEntry<[]>
  /**
   * "default" clauses should be last
   * @see https://sonarsource.github.io/rspec/#/rspec/S4524/javascript
   */
  'sonarjs/prefer-default-last'?: Linter.RuleEntry<[]>
  /**
   * Local variables should not be declared and then immediately returned or thrown
   * @see https://sonarsource.github.io/rspec/#/rspec/S1488/javascript
   */
  'sonarjs/prefer-immediate-return'?: Linter.RuleEntry<[]>
  /**
   * Object literal syntax should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2428/javascript
   */
  'sonarjs/prefer-object-literal'?: Linter.RuleEntry<[]>
  /**
   * Shorthand promises should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4634/javascript
   */
  'sonarjs/prefer-promise-shorthand'?: Linter.RuleEntry<[]>
  /**
   * React props should be read-only
   * @see https://sonarsource.github.io/rspec/#/rspec/S6759/javascript
   */
  'sonarjs/prefer-read-only-props'?: Linter.RuleEntry<[]>
  /**
   * "RegExp.exec()" should be preferred over "String.match()"
   * @see https://sonarsource.github.io/rspec/#/rspec/S6594/javascript
   */
  'sonarjs/prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * Return of boolean expressions should not be wrapped into an "if-then-else" statement
   * @see https://sonarsource.github.io/rspec/#/rspec/S1126/javascript
   */
  'sonarjs/prefer-single-boolean-return'?: Linter.RuleEntry<[]>
  /**
   * Type predicates should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4322/javascript
   */
  'sonarjs/prefer-type-guard'?: Linter.RuleEntry<[]>
  /**
   * A "while" loop should be used instead of a "for" loop
   * @see https://sonarsource.github.io/rspec/#/rspec/S1264/javascript
   */
  'sonarjs/prefer-while'?: Linter.RuleEntry<[]>
  /**
   * Using command line arguments is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4823/javascript
   * @deprecated
   */
  'sonarjs/process-argv'?: Linter.RuleEntry<[]>
  /**
   * Delivering code in production with debug features activated is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4507/javascript
   */
  'sonarjs/production-debug'?: Linter.RuleEntry<[]>
  /**
   * Using pseudorandom number generators (PRNGs) is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2245/javascript
   */
  'sonarjs/pseudo-random'?: Linter.RuleEntry<[]>
  /**
   * Public "static" fields should be read-only
   * @see https://sonarsource.github.io/rspec/#/rspec/S1444/javascript
   */
  'sonarjs/public-static-readonly'?: Linter.RuleEntry<[]>
  /**
   * Using publicly writable directories is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5443/javascript
   */
  'sonarjs/publicly-writable-directories'?: Linter.RuleEntry<[]>
  /**
   * "Array.reduce()" calls should include an initial value
   * @see https://sonarsource.github.io/rspec/#/rspec/S6959/javascript
   */
  'sonarjs/reduce-initial-value'?: Linter.RuleEntry<[]>
  /**
   * Redundant type aliases should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S6564/javascript
   */
  'sonarjs/redundant-type-aliases'?: Linter.RuleEntry<[]>
  /**
   * Regular expressions should not be too complicated
   * @see https://sonarsource.github.io/rspec/#/rspec/S5843/javascript
   */
  'sonarjs/regex-complexity'?: Linter.RuleEntry<SonarjsRegexComplexity>
  /**
   * Using regular expressions is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4784/javascript
   * @deprecated
   */
  'sonarjs/regular-expr'?: Linter.RuleEntry<[]>
  /**
   * A new session should be created during user authentication
   * @see https://sonarsource.github.io/rspec/#/rspec/S5876/javascript
   */
  'sonarjs/session-regeneration'?: Linter.RuleEntry<[]>
  /**
   * Shorthand object properties should be grouped at the beginning or end of an object declaration
   * @see https://sonarsource.github.io/rspec/#/rspec/S3499/javascript
   */
  'sonarjs/shorthand-property-grouping'?: Linter.RuleEntry<SonarjsShorthandPropertyGrouping>
  /**
   * Character classes in regular expressions should not contain only one character
   * @see https://sonarsource.github.io/rspec/#/rspec/S6397/javascript
   */
  'sonarjs/single-char-in-character-classes'?: Linter.RuleEntry<[]>
  /**
   * Single-character alternations in regular expressions should be replaced with character classes
   * @see https://sonarsource.github.io/rspec/#/rspec/S6035/javascript
   */
  'sonarjs/single-character-alternation'?: Linter.RuleEntry<[]>
  /**
   * Using slow regular expressions is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5852/javascript
   */
  'sonarjs/slow-regex'?: Linter.RuleEntry<[]>
  /**
   * Using Sockets is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4818/javascript
   * @deprecated
   */
  'sonarjs/sockets'?: Linter.RuleEntry<[]>
  /**
   * Formatting SQL queries is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2077/javascript
   */
  'sonarjs/sql-queries'?: Linter.RuleEntry<[]>
  /**
   * Tests should be stable
   * @see https://sonarsource.github.io/rspec/#/rspec/S5973/javascript
   */
  'sonarjs/stable-tests'?: Linter.RuleEntry<[]>
  /**
   * Reading the Standard Input is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4829/javascript
   * @deprecated
   */
  'sonarjs/standard-input'?: Linter.RuleEntry<[]>
  /**
   * Regular expressions with the global flag should be used with caution
   * @see https://sonarsource.github.io/rspec/#/rspec/S6351/javascript
   */
  'sonarjs/stateful-regex'?: Linter.RuleEntry<SonarjsStatefulRegex>
  /**
   * Disabling Strict-Transport-Security policy is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5739/javascript
   */
  'sonarjs/strict-transport-security'?: Linter.RuleEntry<SonarjsStrictTransportSecurity>
  /**
   * Comparison operators should not be used with strings
   * @see https://sonarsource.github.io/rspec/#/rspec/S3003/javascript
   */
  'sonarjs/strings-comparison'?: Linter.RuleEntry<SonarjsStringsComparison>
  /**
   * "super()" should be invoked appropriately
   * @see https://sonarsource.github.io/rspec/#/rspec/S3854/javascript
   */
  'sonarjs/super-invocation'?: Linter.RuleEntry<[]>
  /**
   * Tables should have headers
   * @see https://sonarsource.github.io/rspec/#/rspec/S5256/javascript
   */
  'sonarjs/table-header'?: Linter.RuleEntry<[]>
  /**
   * Table cells should reference their headers
   * @see https://sonarsource.github.io/rspec/#/rspec/S5260/javascript
   */
  'sonarjs/table-header-reference'?: Linter.RuleEntry<[]>
  /**
   * Tests should check which exception is thrown
   * @see https://sonarsource.github.io/rspec/#/rspec/S5958/javascript
   */
  'sonarjs/test-check-exception'?: Linter.RuleEntry<[]>
  /**
   * Track uses of "TODO" tags
   * @see https://sonarsource.github.io/rspec/#/rspec/S1135/javascript
   */
  'sonarjs/todo-tag'?: Linter.RuleEntry<[]>
  /**
   * Loops should not contain more than a single "break" or "continue" statement
   * @see https://sonarsource.github.io/rspec/#/rspec/S135/javascript
   */
  'sonarjs/too-many-break-or-continue-in-loop'?: Linter.RuleEntry<SonarjsTooManyBreakOrContinueInLoop>
  /**
   * Regular expressions using Unicode character classes or property escapes should enable the unicode flag
   * @see https://sonarsource.github.io/rspec/#/rspec/S5867/javascript
   */
  'sonarjs/unicode-aware-regex'?: Linter.RuleEntry<SonarjsUnicodeAwareRegex>
  /**
   * Unnecessary imports should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1128/javascript
   */
  'sonarjs/unused-import'?: Linter.RuleEntry<[]>
  /**
   * Names of regular expressions named groups should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S5860/javascript
   */
  'sonarjs/unused-named-groups'?: Linter.RuleEntry<SonarjsUnusedNamedGroups>
  /**
   * Server certificates should be verified during SSL/TLS connections
   * @see https://sonarsource.github.io/rspec/#/rspec/S4830/javascript
   */
  'sonarjs/unverified-certificate'?: Linter.RuleEntry<SonarjsUnverifiedCertificate>
  /**
   * Server hostnames should be verified during SSL/TLS connections
   * @see https://sonarsource.github.io/rspec/#/rspec/S5527/javascript
   */
  'sonarjs/unverified-hostname'?: Linter.RuleEntry<SonarjsUnverifiedHostname>
  /**
   * "const" variables should not be reassigned
   * @see https://sonarsource.github.io/rspec/#/rspec/S3500/javascript
   */
  'sonarjs/updated-const-var'?: Linter.RuleEntry<SonarjsUpdatedConstVar>
  /**
   * Loop counters should not be assigned within the loop body
   * @see https://sonarsource.github.io/rspec/#/rspec/S2310/javascript
   */
  'sonarjs/updated-loop-counter'?: Linter.RuleEntry<SonarjsUpdatedLoopCounter>
  /**
   * Type aliases should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4323/javascript
   */
  'sonarjs/use-type-alias'?: Linter.RuleEntry<SonarjsUseTypeAlias>
  /**
   * Results of operations on strings should not be ignored
   * @see https://sonarsource.github.io/rspec/#/rspec/S1154/javascript
   * @deprecated
   */
  'sonarjs/useless-string-operation'?: Linter.RuleEntry<[]>
  /**
   * Values not convertible to numbers should not be used in numeric comparisons
   * @see https://sonarsource.github.io/rspec/#/rspec/S3758/javascript
   */
  'sonarjs/values-not-convertible-to-numbers'?: Linter.RuleEntry<[]>
  /**
   * Variable, property and parameter names should comply with a naming convention
   * @see https://sonarsource.github.io/rspec/#/rspec/S117/javascript
   */
  'sonarjs/variable-name'?: Linter.RuleEntry<SonarjsVariableName>
  /**
   * "void" should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S3735/javascript
   */
  'sonarjs/void-use'?: Linter.RuleEntry<[]>
  /**
   * Weak SSL/TLS protocols should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4423/javascript
   */
  'sonarjs/weak-ssl'?: Linter.RuleEntry<[]>
  /**
   * Web SQL databases should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2817/javascript
   * @deprecated
   */
  'sonarjs/web-sql-database'?: Linter.RuleEntry<[]>
  /**
   * Disclosing fingerprints from web application technologies is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5689/javascript
   */
  'sonarjs/x-powered-by'?: Linter.RuleEntry<[]>
  /**
   * XML parsers should not be vulnerable to XXE attacks
   * @see https://sonarsource.github.io/rspec/#/rspec/S2755/javascript
   */
  'sonarjs/xml-parser-xxe'?: Linter.RuleEntry<SonarjsXmlParserXxe>
  /**
   * Executing XPath expressions is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4817/javascript
   * @deprecated
   */
  'sonarjs/xpath'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- sonarjs/arguments-order -----
/** @internal */
export type SonarjsArgumentsOrder = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/arguments-usage -----
/** @internal */
export type SonarjsArgumentsUsage = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/arrow-function-convention -----
/** @internal */
export type SonarjsArrowFunctionConvention = []|[{
  requireParameterParentheses?: boolean
  requireBodyBraces?: boolean
}]
// ----- sonarjs/aws-iam-all-privileges -----
/** @internal */
export type SonarjsAwsIamAllPrivileges = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/aws-iam-all-resources-accessible -----
/** @internal */
export type SonarjsAwsIamAllResourcesAccessible = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/aws-iam-privilege-escalation -----
/** @internal */
export type SonarjsAwsIamPrivilegeEscalation = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/aws-iam-public-access -----
/** @internal */
export type SonarjsAwsIamPublicAccess = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/aws-s3-bucket-granted-access -----
/** @internal */
export type SonarjsAwsS3BucketGrantedAccess = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/aws-s3-bucket-public-access -----
/** @internal */
export type SonarjsAwsS3BucketPublicAccess = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/aws-s3-bucket-server-encryption -----
/** @internal */
export type SonarjsAwsS3BucketServerEncryption = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/aws-s3-bucket-versioning -----
/** @internal */
export type SonarjsAwsS3BucketVersioning = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/block-scoped-var -----
/** @internal */
export type SonarjsBlockScopedVar = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/certificate-transparency -----
/** @internal */
export type SonarjsCertificateTransparency = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/class-name -----
/** @internal */
export type SonarjsClassName = []|[{
  format?: string
}]
// ----- sonarjs/cognitive-complexity -----
/** @internal */
export type SonarjsCognitiveComplexity = []|[(number | string)]|[(number | string), string]
// ----- sonarjs/comment-regex -----
/** @internal */
export type SonarjsCommentRegex = []|[{
  regularExpression?: string
  message?: string
  flags?: string
}]
// ----- sonarjs/conditional-indentation -----
/** @internal */
export type SonarjsConditionalIndentation = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/confidential-information-logging -----
/** @internal */
export type SonarjsConfidentialInformationLogging = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/content-length -----
/** @internal */
export type SonarjsContentLength = []|[{
  fileUploadSizeLimit?: number
  standardSizeLimit?: number
}]
// ----- sonarjs/content-security-policy -----
/** @internal */
export type SonarjsContentSecurityPolicy = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/cookie-no-httponly -----
/** @internal */
export type SonarjsCookieNoHttponly = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/cors -----
/** @internal */
export type SonarjsCors = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/csrf -----
/** @internal */
export type SonarjsCsrf = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/cyclomatic-complexity -----
/** @internal */
export type SonarjsCyclomaticComplexity = []|[{
  threshold?: number
}]|[{
  threshold?: number
}, ("sonar-runtime" | "metric")]
// ----- sonarjs/destructuring-assignment-syntax -----
/** @internal */
export type SonarjsDestructuringAssignmentSyntax = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/different-types-comparison -----
/** @internal */
export type SonarjsDifferentTypesComparison = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/disabled-auto-escaping -----
/** @internal */
export type SonarjsDisabledAutoEscaping = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/dns-prefetching -----
/** @internal */
export type SonarjsDnsPrefetching = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/duplicates-in-character-class -----
/** @internal */
export type SonarjsDuplicatesInCharacterClass = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/enforce-trailing-comma -----
/** @internal */
export type SonarjsEnforceTrailingComma = []|[(_SonarjsEnforceTrailingCommaValue | {
  arrays?: _SonarjsEnforceTrailingCommaValueWithIgnore
  objects?: _SonarjsEnforceTrailingCommaValueWithIgnore
  imports?: _SonarjsEnforceTrailingCommaValueWithIgnore
  exports?: _SonarjsEnforceTrailingCommaValueWithIgnore
  functions?: _SonarjsEnforceTrailingCommaValueWithIgnore
})]
/** @internal */
export type _SonarjsEnforceTrailingCommaValue = ("always-multiline" | "always" | "never" | "only-multiline")
/** @internal */
export type _SonarjsEnforceTrailingCommaValueWithIgnore = ("always-multiline" | "always" | "ignore" | "never" | "only-multiline")
// ----- sonarjs/expression-complexity -----
/** @internal */
export type SonarjsExpressionComplexity = []|[{
  max?: number
}]|[{
  max?: number
}, ("sonar-runtime" | "metric")]
// ----- sonarjs/file-header -----
/** @internal */
export type SonarjsFileHeader = []|[{
  headerFormat?: string
  isRegularExpression?: boolean
}]
// ----- sonarjs/file-uploads -----
/** @internal */
export type SonarjsFileUploads = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/for-loop-increment-sign -----
/** @internal */
export type SonarjsForLoopIncrementSign = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/frame-ancestors -----
/** @internal */
export type SonarjsFrameAncestors = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/function-inside-loop -----
/** @internal */
export type SonarjsFunctionInsideLoop = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/function-name -----
/** @internal */
export type SonarjsFunctionName = []|[{
  format?: string
}]
// ----- sonarjs/function-return-type -----
/** @internal */
export type SonarjsFunctionReturnType = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/in-operator-type-error -----
/** @internal */
export type SonarjsInOperatorTypeError = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/inconsistent-function-call -----
/** @internal */
export type SonarjsInconsistentFunctionCall = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/insecure-cookie -----
/** @internal */
export type SonarjsInsecureCookie = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/insecure-jwt-token -----
/** @internal */
export type SonarjsInsecureJwtToken = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/inverted-assertion-arguments -----
/** @internal */
export type SonarjsInvertedAssertionArguments = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/max-lines -----
/** @internal */
export type SonarjsMaxLines = []|[{
  maximum?: number
}]
// ----- sonarjs/max-lines-per-function -----
/** @internal */
export type SonarjsMaxLinesPerFunction = []|[{
  maximum?: number
}]
// ----- sonarjs/max-switch-cases -----
/** @internal */
export type SonarjsMaxSwitchCases = []|[number]
// ----- sonarjs/max-union-size -----
/** @internal */
export type SonarjsMaxUnionSize = []|[{
  threshold?: number
}]
// ----- sonarjs/nested-control-flow -----
/** @internal */
export type SonarjsNestedControlFlow = []|[{
  maximumNestingLevel?: number
}]|[{
  maximumNestingLevel?: number
}, ("sonar-runtime" | "metric")]
// ----- sonarjs/new-operator-misuse -----
/** @internal */
export type SonarjsNewOperatorMisuse = []|[{
  considerJSDoc?: boolean
}]|[{
  considerJSDoc?: boolean
}, unknown]
// ----- sonarjs/no-code-after-done -----
/** @internal */
export type SonarjsNoCodeAfterDone = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-collapsible-if -----
/** @internal */
export type SonarjsNoCollapsibleIf = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-duplicate-in-composite -----
/** @internal */
export type SonarjsNoDuplicateInComposite = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-duplicate-string -----
/** @internal */
export type SonarjsNoDuplicateString = []|[{
  threshold?: number
  ignoreStrings?: string
}]|[{
  threshold?: number
  ignoreStrings?: string
}, ("sonar-runtime" | "metric")]
// ----- sonarjs/no-duplicated-branches -----
/** @internal */
export type SonarjsNoDuplicatedBranches = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-element-overwrite -----
/** @internal */
export type SonarjsNoElementOverwrite = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-extra-arguments -----
/** @internal */
export type SonarjsNoExtraArguments = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-gratuitous-expressions -----
/** @internal */
export type SonarjsNoGratuitousExpressions = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-hardcoded-passwords -----
/** @internal */
export type SonarjsNoHardcodedPasswords = []|[{
  passwordWords?: string[]
}]
// ----- sonarjs/no-hardcoded-secrets -----
/** @internal */
export type SonarjsNoHardcodedSecrets = []|[{
  secretWords?: string
  randomnessSensibility?: number
}]
// ----- sonarjs/no-identical-conditions -----
/** @internal */
export type SonarjsNoIdenticalConditions = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-identical-expressions -----
/** @internal */
export type SonarjsNoIdenticalExpressions = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-identical-functions -----
/** @internal */
export type SonarjsNoIdenticalFunctions = []|[number]|[number, ("sonar-runtime" | "metric")]
// ----- sonarjs/no-implicit-dependencies -----
/** @internal */
export type SonarjsNoImplicitDependencies = []|[{
  whitelist?: string[]
}]
// ----- sonarjs/no-inconsistent-returns -----
/** @internal */
export type SonarjsNoInconsistentReturns = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-incorrect-string-concat -----
/** @internal */
export type SonarjsNoIncorrectStringConcat = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-intrusive-permissions -----
/** @internal */
export type SonarjsNoIntrusivePermissions = []|[{
  permissions?: string[]
}]
// ----- sonarjs/no-invariant-returns -----
/** @internal */
export type SonarjsNoInvariantReturns = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-ip-forward -----
/** @internal */
export type SonarjsNoIpForward = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-mime-sniff -----
/** @internal */
export type SonarjsNoMimeSniff = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-mixed-content -----
/** @internal */
export type SonarjsNoMixedContent = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-nested-functions -----
/** @internal */
export type SonarjsNoNestedFunctions = []|[{
  threshold?: number
}]|[{
  threshold?: number
}, ("sonar-runtime" | "metric")]
// ----- sonarjs/no-redundant-optional -----
/** @internal */
export type SonarjsNoRedundantOptional = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-redundant-parentheses -----
/** @internal */
export type SonarjsNoRedundantParentheses = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-reference-error -----
/** @internal */
export type SonarjsNoReferenceError = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-referrer-policy -----
/** @internal */
export type SonarjsNoReferrerPolicy = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-same-argument-assert -----
/** @internal */
export type SonarjsNoSameArgumentAssert = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-same-line-conditional -----
/** @internal */
export type SonarjsNoSameLineConditional = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-selector-parameter -----
/** @internal */
export type SonarjsNoSelectorParameter = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-try-promise -----
/** @internal */
export type SonarjsNoTryPromise = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-variable-usage-before-declaration -----
/** @internal */
export type SonarjsNoVariableUsageBeforeDeclaration = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/non-number-in-arithmetic-expression -----
/** @internal */
export type SonarjsNonNumberInArithmeticExpression = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/regex-complexity -----
/** @internal */
export type SonarjsRegexComplexity = []|[{
  threshold?: number
}]|[{
  threshold?: number
}, ("sonar-runtime" | "metric")]
// ----- sonarjs/shorthand-property-grouping -----
/** @internal */
export type SonarjsShorthandPropertyGrouping = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/stateful-regex -----
/** @internal */
export type SonarjsStatefulRegex = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/strict-transport-security -----
/** @internal */
export type SonarjsStrictTransportSecurity = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/strings-comparison -----
/** @internal */
export type SonarjsStringsComparison = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/too-many-break-or-continue-in-loop -----
/** @internal */
export type SonarjsTooManyBreakOrContinueInLoop = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/unicode-aware-regex -----
/** @internal */
export type SonarjsUnicodeAwareRegex = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/unused-named-groups -----
/** @internal */
export type SonarjsUnusedNamedGroups = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/unverified-certificate -----
/** @internal */
export type SonarjsUnverifiedCertificate = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/unverified-hostname -----
/** @internal */
export type SonarjsUnverifiedHostname = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/updated-const-var -----
/** @internal */
export type SonarjsUpdatedConstVar = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/updated-loop-counter -----
/** @internal */
export type SonarjsUpdatedLoopCounter = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/use-type-alias -----
/** @internal */
export type SonarjsUseTypeAlias = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/variable-name -----
/** @internal */
export type SonarjsVariableName = []|[{
  format?: string
}]
// ----- sonarjs/xml-parser-xxe -----
/** @internal */
export type SonarjsXmlParserXxe = []|[("sonar-runtime" | "metric")]
// Names of all the configs
export type ConfigNames = 'deputy-sonar/sonar' | 'deputy-sonar/sonar'
